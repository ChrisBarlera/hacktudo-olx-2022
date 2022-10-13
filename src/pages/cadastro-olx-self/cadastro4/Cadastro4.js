import logo from "../../../assets/OLXSelf_logo.png";
import "./Cadastro4.css";
import checked from "../../../assets/checked.png";

import HeaderCadastro from "../../../components/header-cadastro/HeaderCadastro";
import CadastroTop from "../../../components/cadastro-top/CadastroTop";
import AvancarCadastro from "../../../components/bt-avancar-cadastro/AvancarCadastro";

function Cadastro4() {
  return (
    <div>
      <HeaderCadastro />
      <div className="grid2">
        <div className="cadastroThings">
          <CadastroTop
            titulo="Validação de Identificação"
            desc="Para garantir mais segurança a plataforma, precisamos verificar sua identidade."
          />
          <img src={logo} alt="olx self logo" width="300px" />
          <img
            src={checked}
            alt="olx self checked"
            width="100px"
            className="img-checked"
          />
          <p className="identificacao">
            Sua identificação foi feita com sucesso.
          </p>
          <AvancarCadastro texto="Finalizar" para="/" />
        </div>
        <div className="rightDiv-cadastro">
          <img
            id="rightImg"
            src="https://c.smartrecruiters.com/sr-careersite-image-prod-dc5/5f8ece230e547939dcebadda/7f1d816b-019e-4deb-a51e-03e93c0ea90d?r=s3-eu-central-1"
            alt="olx brasil"
          />
        </div>
      </div>
    </div>
  );
}

export default Cadastro4;
