import './OLXSelf.css';
import logo from '../../../res/OLXSelf_logo.png';

import { useState } from 'react';
import { Switch } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';

function OLXSelf() {

  const [toggle, setToggle] = useState(false)

  function testingSwitch() {
    var checkedIconList = document.querySelectorAll('.checkedIcon')
    
    if (toggle) {
      for (let index = 0; index < checkedIconList.length; index++) {
        const element = checkedIconList[index];
        element.classList.add('hidden')
      }
      setToggle(false)
    } else {
      for (let index = 0; index < checkedIconList.length; index++) {
        const element = checkedIconList[index];
        element.classList.remove('hidden')
      }
      setToggle(true)
    }
  }

  return (
    <div id="olx-self">
      <div>
        <img src={logo} alt="OLX Self" />
        <span id="infoIcon"><InfoOutlined/></span>
        <p id="olx-self-desc">Filtro de anunciantes verificados</p>
      </div>
      <Switch id='switch' onChange={testingSwitch}/>
    </div>
  );
}

export default OLXSelf;
