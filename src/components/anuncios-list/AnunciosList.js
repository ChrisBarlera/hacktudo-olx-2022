import Anuncio from "./anuncio/Anuncio";

function AnunciosList() {
  return (
    <ul>
      <li>
        <Anuncio
          preco={"12.000 /mês"}
          descricao="Descubra como é morar nas nuvens neste apartamento mobiliado em Balneário Camboriú"
          endereco={"Rua 3700, Centro"}
        />
      </li>
      <li>
        <Anuncio
          preco={"18.000 /mês"}
          descricao="Somos especializados em transformar seus sonhos em realidade!!!"
          endereco={"Rua Julieta Lins, Pioneiros"}
        />
      </li>
      <li>
        <Anuncio
          preco={"1200 /dia"}
          descricao="Lindo apartamento de frente para o mar, na praia central de Balneário Camboriú."
          endereco={"Avenida Atlântica, Frente Mar Centro"}
        />
      </li>
    </ul>
  );
}

export default AnunciosList;
