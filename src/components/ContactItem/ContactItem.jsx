import PropTypes from 'prop-types';
import { Item, DeleteBtn } from './ContactItem.styled';

const ContactItem = ({ name, number, onDeleteContact }) => {
  return (
    <Item>
      <p>{name}</p>
      <p>{number}</p>
      <DeleteBtn type="button" onClick={onDeleteContact}>
        delete
      </DeleteBtn>
    </Item>
  );
};
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
