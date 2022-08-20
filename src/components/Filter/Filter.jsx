import { useSelector, useDispatch } from 'react-redux';
import { setFilter, getFilterValue } from '../../redux/phoneBook/filterSlice';
import { Label, Input, FilterWrap } from 'components/Form.styled';


export default function Filter() {
  const value = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const onChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <FilterWrap>
      <Label>
        Find contacts by name
        <Input type="text" value={value} onChange={onChangeFilter} />
      </Label>
    </FilterWrap>
  );
};


