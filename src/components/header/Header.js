import './Header.css';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {Select, InputLabel, FormControl, MenuItem} from '@mui/material';
import { Link } from 'react-router-dom';



function Header() {
  return (
    <header>
      <img src="https://assets.zap.com.br/assets/v5.228.1/zap.svg?8dbcae1e48d1b92a07868ba988886986" alt="img" />
      <nav className="header-navbar">
        <li>Comprar</li>
        <li>Alugar</li>
        <li>
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={0}
            label="Age"
          >
            <MenuItem value={0}>Lançamentos</MenuItem>
            <MenuItem value={1}>Na planta</MenuItem>
            <MenuItem value={2}>Em contrução</MenuItem>
            <MenuItem value={3}>Pronto pra morar</MenuItem>
            <MenuItem value={4}>Todos os imóveis</MenuItem>
          </Select>
          </FormControl>
        </li>
        <li>Descobrir</li>
        <li>Financiamento</li>
        <li>Central de ajuda</li>
        <li><button id="anunciarBt">Anunciar</button></li>
        <li><button id="entrarBt"><AccountCircleOutlinedIcon/><Link to='/cadastro'>Entrar</Link></button></li>
      </nav>
    </header>
  );
}

export default Header;
