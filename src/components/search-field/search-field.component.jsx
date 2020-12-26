import React from 'react';

import './search-field.styles.scss';

const SearchField = props => (
  <input type='search' placeholder='type monster name' className='search-field' onChange={props.onChange} value={props.search} />
);

export default SearchField;