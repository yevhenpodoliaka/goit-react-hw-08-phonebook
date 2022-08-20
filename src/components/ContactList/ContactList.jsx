import ContactItem from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getFilterValue } from '../../redux/phoneBook/filterSlice';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/phoneBook/phoneBookApi';

export default function Contactlist  ()  {
  const { data: contacts } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const filterValue = useSelector(getFilterValue);

  const getVisiblecontacts = () => {
    const normalizedFilter = filterValue.toLowerCase();
    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisiblecontacts();

  return (
    <>
      <ul>
        {visibleContacts ? (
          visibleContacts?.map(({ id, name, number }) => (
            <ContactItem
              key={id}
              name={name}
              number={number}
              onDeleteContact={() => deleteContact(id)}
            />
          ))
        ) : (
          <p>Loading Contact ...</p>
        )}
      </ul>
      {contacts?.length === 0 && <p>there are not contacts</p>}
    </>
  );
};


