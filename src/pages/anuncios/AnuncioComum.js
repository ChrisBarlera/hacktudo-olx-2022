import "./Anuncios.css";

import CadastroTop from "../../components/cadastro-top/CadastroTop";
import AnuncianteCard from "../../components/anunciante-card/AnuncianteCard";

import LayersIcon from '@mui/icons-material/Layers';

function AnunciosComum() {
  return (
    <div className="mainAnunciosContainer">
      <div className="anuncioContent">
        <p className="cinzaP">Apartamentos para alugar / SC / Aartamento para alugar em BC / Centro / Rua 3000</p>
        <CadastroTop
          titulo="Apartamento com 3 quartos para alugar, 100m2 - Centro"
        />
        <p className="cinzaP">Apartamento para alugar em</p>
        <p className="roxoP">Centro, Rua 3000</p>
        <CadastroTop
          titulo="R$ 4.000/mês"
        />
        <p className="cinzaP">Condomínio R$ 1000 - IPTU R$ 100</p>
        <ul className="apartamentosList">
          <li>
            <LayersIcon/>
            <p className="cinzaP">Apartamento</p>
          </li>
          <li>
            <LayersIcon/>
            <p className="cinzaP">Apartamento</p>
          </li>
          <li>
            <LayersIcon/>
            <p className="cinzaP">Apartamento</p>
          </li>
        </ul>
      </div>
      <div className="cardContainerDiv">
        <AnuncianteCard isBlue={false}/>
      </div>
    </div>
  );
}

export default AnunciosComum;
