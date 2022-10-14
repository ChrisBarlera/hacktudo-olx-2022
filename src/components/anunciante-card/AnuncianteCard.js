import "./AnuncianteCard.css";
import green from "../../assets/checked.png";
import blue from "../../assets/checkedBlue.png";

import BotaoCard from "../botao-card/BotaoCard";

function AnuncianteCard({isBlue}) {
  var checked = green
  var tipo_user = "Usuário OLX"

  if (isBlue) {
    checked = blue
    tipo_user = "CRECI: 2XXXX-F-SC"
  }

  return (
    <div className="anuncianteCard">
      <div>
        <img src={checked} alt="checked" className="checkBadge" />
        <img
          src="https://picsum.photos/78/89"
          alt="Imagem anunciante"
          className="imgAnunciante"
        />
        <p className="cinzaP">Nome do anunciante</p>
      </div>
      <div className="midDiv">
        <BotaoCard texto="OLXSELF"/>
        <p className="cinzaP">{tipo_user}</p>
        <div className="linhaCinza"></div>
      </div>
      <div className="buttonsBottom">
        <BotaoCard texto="Contato"/>
        <BotaoCard texto="Whatsapp"/>
      </div>
    </div>
  );
}

export default AnuncianteCard;
