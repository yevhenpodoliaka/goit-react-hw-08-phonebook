import Contactlist from '../components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
export default function ContactListPage() {
  return (
    <>
      <h2>ContactListPage</h2>
      <ContactForm />
      <Filter/>
      <Contactlist />
    </>
  );
}
