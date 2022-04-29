//===============Hooks===========================

import { useState } from 'react';
import { InputItem, AddContact } from './ContactForm.styled';
import { Formik, Form } from 'formik';

export default function ContactForm({ submitHandle }) {
  const [name] = useState('');
  const [number] = useState('');

  const onSubmit = (values, action) => {
    submitHandle(values);
    action.resetForm();
  };
  return (
    <Formik initialValues={{ name, number }} onSubmit={onSubmit}>
      <Form>
        <label>
          Name
          <InputItem
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <InputItem
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <AddContact type="submit">Add contact</AddContact>
      </Form>
    </Formik>
  );
}

//===========================Class=======================

// import { Component } from 'react';
// import { InputItem, AddContact } from './ContactForm.styled';
// import { Formik, Form } from 'formik';

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };
//   onSubmit = (values, action) => {
//     this.props.submitHandle(values);
//     action.resetForm();
//   };
//   render() {
//     const { name, number } = this.state;
//     return (
//       <Formik initialValues={{ name, number }} onSubmit={this.onSubmit}>
//         <Form>
//           <label>
//             Name
//             <InputItem
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//           </label>
//           <label>
//             Number
//             <InputItem
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//           </label>
//           <AddContact type="submit">Add contact</AddContact>
//         </Form>
//       </Formik>
//     );
//   }
// }
