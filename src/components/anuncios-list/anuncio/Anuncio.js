import "./Anuncio.css"

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import checkedIcon from "../../../assets/checked.png";

function Anuncio({preco, descricao, endereco}) {
  return (
    <div id="anuncioContainer">
      <img src="https://picsum.photos/200" alt="Foto do Anúncio"/>
      <div>
        <div id="topDiv">
          <p><strong>R${preco}</strong></p>
          <div id="iconsDiv">
            <img src={checkedIcon} alt="checkedIcon" className="checkedIcon hidden"/>
            <FavoriteBorderIcon className="fav-icon"/>
          </div>
          
        </div>
        <p>{descricao}</p>
        <p>{endereco}</p>
        <div id="botDiv">
          <p id="telefone">Telefone</p>
          <button id='msgButton'>Mensagem</button>
        </div>
      </div>
    </div>
  );
}

export default Anuncio;