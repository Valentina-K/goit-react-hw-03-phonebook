import React from 'react';
import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';
import { List } from './ContactList.styled';
const ContactList = ({ contacts, onClick }) => {
  return (
    <List>
      {contacts.map(contact => (
        <Contact key={contact.id} name={contact.name} number={contact.number}>
          <button onClick={() => onClick(contact.id)}>Delete</button>
        </Contact>
      ))}
    </List>
  );
};

ContactList.protoTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};
export default ContactList;
