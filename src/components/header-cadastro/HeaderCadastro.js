import { Link } from "react-router-dom";

function HeaderCadastro() {
  return (
    <header className="headerCadastro">
      <Link to="/">
        <img
          src="https://assets.zap.com.br/assets/v5.228.1/zap.svg?8dbcae1e48d1b92a07868ba988886986"
          alt="img"
        />
      </Link>
    </header>
  );
}

export default HeaderCadastro;
