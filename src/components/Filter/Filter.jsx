import React from 'react';
import PropTypes from 'prop-types';
import { FilterBox } from './Filter.styled';
const Filter = ({ onChange, value }) => {
  return (
    <FilterBox>
      <span>Find contact by name</span>
      <input type="text" value={value} onChange={e => onChange(e)} />
    </FilterBox>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default Filter;
