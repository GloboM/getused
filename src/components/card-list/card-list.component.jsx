import React from 'react';

import Card from '../card/card.component';
import './card-list.styles.css';

const cardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map(monster => {
        return (
          <Card className="monster-card" key={monster.id} monster={monster} />
        )
      })}
    </div>
  )
}

export default cardList;