import {Component} from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { FormBox, Phonebook} from './ContactForm/ContactForm.styled';
import { ContactListBox } from './ContactList/ContactList.styled';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("Contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("Contacts", JSON.stringify(this.state.contacts));
    }
  }

  onDelete = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };
  matchСheck = (data) => {
    const currentName = this.state.contacts.find(
      (el) => el.name.toLowerCase() === data.name.toLowerCase()
    );
    if (currentName) return alert(currentName.name + " is already in contacts");

    data.id = nanoid();
    this.setState((prev) => ({ contacts: [data, ...prev.contacts] }));
  };
  filterChange = (e) => {
    e.preventDefault();
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <Phonebook>
        <FormBox>
          <h1>Phonebook</h1>
          <ContactForm submitHandle={this.matchСheck} />
        </FormBox>
        <ContactListBox>
          <h2>Contact List</h2>
          <Filter filter={filter} filterChange={this.filterChange} />
          {contacts.length ? (
            <ContactList contacts={filteredContacts} onDelete={this.onDelete} />
          ) : (
            <p>No any contacts</p>
          )}
        </ContactListBox>
      </Phonebook>
    );
  }
}
ContactForm.propTypes = {
  submitHandle: PropTypes.func
}










