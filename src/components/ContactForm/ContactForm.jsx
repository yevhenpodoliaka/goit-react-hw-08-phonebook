import { useEffect } from 'react';
import useLocalStorage from 'hooks/useLockalStorage';
import toast from 'react-hot-toast';
import { Form, Label, Input, Btn } from '../Form.styled';

import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../../redux/phoneBook/phoneBookApi';

function ContactForm() {
  const [name, setName] = useLocalStorage('name','');
  const [number, setNumber] = useLocalStorage('number','');

  const [addContact, { isSuccess, data }] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();




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
  const hasContact = () => {
    contacts.find(el => el.name.toLowerCase() === name.toLowerCase())
      ? toast.error(`${name} is already in contacts`)
      : addContact({ name, number });
  };

  const handleSubmit = e => {
    e.preventDefault();
    hasContact();
    setName('');
    setNumber('');
  };




  return (
    <Form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <Label>
        Name
        <Input
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </Label>
      <Label>
        Number
        <Input
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </Label>
      <Btn type="submit">Add Contact</Btn>
    </Form>
  );
}

export default ContactForm;
