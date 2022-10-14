import { Link } from "react-router-dom";
import Anuncio from "./anuncio/Anuncio";

function AnunciosList() {
  return (
    <ul>
      <li>
        <Link to="/anuncio/creci">
          <Anuncio
            preco={"12.000 /mês"}
            descricao="Descubra como é morar nas nuvens neste apartamento mobiliado em Balneário Camboriú"
            endereco={"Rua 3700, Centro"}
            isBlue={true}
          />
        </Link>
      </li>
      <li>
      <Link to="/anuncio/comum">
        <Anuncio
          preco={"18.000 /mês"}
          descricao="Somos especializados em transformar seus sonhos em realidade!!!"
          endereco={"Rua Julieta Lins, Pioneiros"}
          isBlue={false}
        />
      </Link>
      </li>
      <li>
      <Link to="/anuncio/comum">
        <Anuncio
          preco={"1200 /dia"}
          descricao="Lindo apartamento de frente para o mar, na praia central de Balneário Camboriú."
          endereco={"Avenida Atlântica, Frente Mar Centro"}
          isBlue={false}
        />
      </Link>
      </li>
    </ul>
  );
}

export default AnunciosList;
