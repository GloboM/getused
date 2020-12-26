import React, { Component } from 'react';

import SearchFiled from './components/search-field/search-field.component';
import CardList from './components/card-list/card-list.component';

import './App.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      search: ''
    }

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(monsters => this.setState({ monsters }));
  }

  onSearch = (e) => {
    e.preventDefault();
    this.setState({ search: e.target.value });
  }
  render() {
    if (!this.state.monsters.length) {
      return <h1>Loading...</h1>
    }
    const { monsters, search } = this.state;
    const FilteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(search.toLowerCase()));
    return (
      <div className="main">
        <div className="app">
          <h1>Monsters Rolodex</h1>
          <SearchFiled search={this.state.search} onChange={this.onSearch} />
          <CardList monsters={FilteredMonsters} />
        </div>
      </div>
    )
  }
}

export default App;