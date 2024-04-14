import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, item, theme) {
  return {
    fontWeight:
      item.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const MultipleSelect = ({
    options=[], 
    label='', 
    handleChange=null
})  => {
  const theme = useTheme();
  const [item, setItem] = React.useState([]);

  const handleValueChange = (event) => {
    const {
      target: { value },
    } = event;
    setItem(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    handleChange &&handleChange(value);
  };

  return (
    <div style={{marginTop:'1.2rem'}}>
      <FormControl fullWidth variant='standard'>
        <InputLabel id="demo-multiple-name-label">{label}</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={item}
          onChange={handleValueChange}
          MenuProps={MenuProps}
        >
          {options.map(({id, value}) => (
            <MenuItem
              key={id}
              value={value}
              style={getStyles(value, item, theme)}
            >
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default MultipleSelect;