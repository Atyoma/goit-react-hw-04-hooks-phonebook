import {
  ListItem,
  NumberOrder,
  Number,
  DeleteContact,
} from "./ContactList.styled";

import PropTypes from "prop-types";

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      {contacts.map((contact, index) => (
        <ListItem key={index}>
          <NumberOrder>{index + 1}</NumberOrder>
          {contact.name}: <Number>{contact.number}</Number>
          <DeleteContact type="button" onClick={() => onDelete(contact.id)}>
            Delete
          </DeleteContact>
        </ListItem>
      ))}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};
