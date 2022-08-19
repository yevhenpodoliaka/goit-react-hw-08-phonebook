import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

import {
  useAddContactMutation,
  // useGetContactsQuery,
} from '../../redux/phoneBook/phoneBookApi';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [addContact, { isSuccess, data }] = useAddContactMutation();
  // const { data: contacts } = useGetContactsQuery();

  useEffect(() => {
    if (isSuccess) {
      toast.success(`contact ${data.name} add in list`);
    }
  }, [isSuccess, data]);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact({ name, number });
    console.log(addContact);
    setName('');
    setNumber('');
  };




  return (
    <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column'}}>
      <label>
        Name
        <input
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label>
        Number
        <input
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button type="submit">
        Add Contact
      </button>
    </form>
  );
}

export default ContactForm;
