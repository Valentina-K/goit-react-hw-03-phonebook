import React, { Component } from 'react';
import { customAlphabet } from 'nanoid';
import PropTypes from 'prop-types';
import Form from './ContactForm.styled';

const nanoid = customAlphabet('1234567890id-', 5);

const INITIAL_STATE = {
  name: '',
  number: '',
};
export default class ContactForm extends Component {
  static propTypes = { onSubmit: PropTypes.func.isRequired };
  state = {
    name: '',
    number: '',
  };

  nameInput = nanoid();
  numberImput = nanoid();

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor={this.nameInput}>Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            id={this.nameInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor={this.numberInput}>Number</label>
          <input
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.numberImput}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    );
  }
}
