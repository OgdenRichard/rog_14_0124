import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useDispatch } from 'react-redux';

export const DropdownSelect = ({
  data,
  datakey,
  label,
  reducer,
  storeVal,
  keyAsVal,
  required,
  error,
}) => {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(reducer(event.target.value));
  };
  const labelDisplay = label.charAt(0).toUpperCase() + label.slice(1);
  return (
    <>
      <FormControl fullWidth required={required} error={error}>
        <InputLabel id={`${label}-select-label`}>{labelDisplay}</InputLabel>
        <Select
          labelId={`${label}-select-label`}
          id={`${label}-select`}
          value={storeVal}
          label={labelDisplay}
          onChange={handleChange}
        >
          {data &&
            data.map((item) => (
              <MenuItem
                key={item[datakey]}
                value={keyAsVal ? item[datakey] : item.name}
              >
                {item.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </>
  );
};
