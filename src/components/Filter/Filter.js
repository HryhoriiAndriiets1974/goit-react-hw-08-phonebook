// import { useDispatch, useSelector } from 'react-redux';
// import {updateFilter} from '../../redux/Slice';
import { useFilter } from 'hooks/hookFilter';
import css from './Filter.module.css';

const Filter = () => {
  // const dispatch = useDispatch();
  // const value = useSelector(state => state.filter);

  // const changeFilter = e => {
  //   dispatch(updateFilter(e.currentTarget.value));
  // };

  const {value, changeFilter} = useFilter();

  return (
    <label className={css.filter__label}>
      Find contacts by name :
      <input
        className={css.filter__input}
        type="name"
        value={value}
        onChange={e => changeFilter(e.target.value)} />
    </label>
  )
}

export default Filter;
