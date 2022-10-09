import './Filters.css';

import {Select, InputLabel, FormControl, MenuItem} from '@mui/material';
import OLXSelf from './olx-self/OLXSelf';

function Filters() {
  return (
    <div id="filtros">
      <OLXSelf/>
      <label>Qual tipo?</label>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={10}
          label="Age"
        >
          <MenuItem value={10}>Apartamento</MenuItem>
          <MenuItem value={20}>Casa</MenuItem>
          <MenuItem value={30}>Kitnet</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Filters;
