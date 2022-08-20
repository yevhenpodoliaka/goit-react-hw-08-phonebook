import Contactlist from '../components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';

export default function ContactListPage() {
  
  return (
    <>
      <ContactForm />
      <Filter/>
      <Contactlist />
    </>
  );
}
