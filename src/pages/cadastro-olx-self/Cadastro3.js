import logo from "../../assets/OLXSelf_logo.png";
import "./Cadastro.css";

import HeaderCadastro from "../../components/header-cadastro/HeaderCadastro";
import CadastroTop from "../../components/cadastro-top/CadastroTop";
import DocsComponent from "../../components/docs-component/DocsComponent";
import AvancarCadastro from "../../components/bt-avancar-cadastro/AvancarCadastro";

function Cadastro3() {
  return (
    <div>
      <HeaderCadastro />
      <div className="grid2">
        <div className="cadastroThings">
          <CadastroTop
            titulo="Validação de Identificação"
            desc="Precisamos que você envie uma foto sua segurando o documento com foto ao lado do seu rosto."
          />
          <img src={logo} alt="olx self logo" width="300px" />
          <DocsComponent texto="Foto segurando o documento" />
          <br/>
          <AvancarCadastro texto="Enviar" para="/cadastro/4" />
          <p className="caixaTexto 3">Ao se cadastrar você concorda com nossos Termos de Condições de Uso e Políticas de Privacidade.</p> 
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

export default Cadastro3;
