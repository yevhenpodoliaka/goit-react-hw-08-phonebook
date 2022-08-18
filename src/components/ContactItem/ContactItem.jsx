import PropTypes from 'prop-types';


const ContactItem = ({ name, number, onDeleteContact }) => {
  return (
    <li>
      <p>
        {name}:{number}
      </p>
      <button type="button" onClick={onDeleteContact}>
        delete
      </button>
    </li>
  );
};
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
