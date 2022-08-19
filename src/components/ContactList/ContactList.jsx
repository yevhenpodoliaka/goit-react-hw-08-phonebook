// import toast from 'react-hot-toast';
// import { useEffect } from 'react';
import ContactItem from '../ContactItem/ContactItem';
// import { useSelector } from 'react-redux';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/phoneBook/phoneBookApi';
// import { getFilterValue } from '../../redux/filterSlice';

const Contactlist = () => {
  const { data: contacts } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  // const [deleteContact, { isSuccess, data }] = useDeleteContactMutation();

//   const value = useSelector(getFilterValue);
//   useEffect(() => {
//     if (isSuccess) {
//       toast.success(`contact ${data.name} deleted`);
//     }
//   }, [isSuccess, data]);

//   const getVisiblecontacts = () => {
//     const normalizedFilter = value.toLowerCase();
//     return contacts?.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   const visibleContacts = getVisiblecontacts();

  return (
    <>
      <ul >
        {contacts ? (
          contacts?.map(({ id, name, number }) => (
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

export default Contactlist;
