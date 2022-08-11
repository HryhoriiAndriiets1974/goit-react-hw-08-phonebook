import { useDispatch, useSelector } from "react-redux";
import { onFilterChange } from "redux/Slice";
import { filterAction } from "redux/Slice";

export const useFilter = () => {
  const filter = useSelector(onFilterChange);
  const dispatch = useDispatch();

  const onChangeFilter = e => dispatch(filterAction.changeFilter(e));
  return {
    filter,
    changeFilter: onChangeFilter
  }
};
