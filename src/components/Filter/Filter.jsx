import { useSelector, useDispatch } from 'react-redux';
import { setFilter, getFilterValue } from '../../redux/phoneBook/filterSlice';
import { Label, Input, FilterWrap } from 'components/Form.styled';


const Filter = () => {
  const value = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const onChahgeFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <FilterWrap>
      <Label>
        Find contacts by name
        <Input type="text" value={value} onChange={onChahgeFilter} />
      </Label>
    </FilterWrap>
  );
};

export default Filter;
