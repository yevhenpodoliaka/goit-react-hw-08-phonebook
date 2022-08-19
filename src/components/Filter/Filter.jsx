import { useSelector, useDispatch } from 'react-redux';
import { setFilter, getFilterValue } from '../../redux/phoneBook/filterSlice';

const Filter = () => {
  const value = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const onChahgeFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onChahgeFilter} />
    </label>
  );
};

export default Filter;
