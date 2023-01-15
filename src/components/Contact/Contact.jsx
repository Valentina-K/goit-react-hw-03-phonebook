import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './Contact.styled';
const Contact = ({ name, number, children }) => (
  <Item>
    <span>
      {name}: {number}
    </span>
    {children}
  </Item>
);

Contact.protoTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
