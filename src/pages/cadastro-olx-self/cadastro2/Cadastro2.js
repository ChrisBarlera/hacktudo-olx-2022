import { Link } from "react-router-dom";
import "./Cadastro2.css";
import logo from '../../../res/OLXSelf_logo.png';


import CadastroTop from "../../../components/cadastro-top/CadastroTop";
import AvancarCadastro from "../../../components/bt-avancar-cadastro/AvancarCadastro"


function Cadastro1() {
  return (
    <div className="grid2">
      <div className="cadastroThings">
        <CadastroTop
          titulo="Validação de Identificação"
          desc="Para garantir mais segurança a plataforma, precisamos verificar sua identidade"
        />
        <img src={logo} alt="olx self logo" width="300px" />
        <AvancarCadastro texto="Enviar" para="/cadastro/2"/>
      </div>
      <div className="rightDiv-cadastro">
        <Link to="/cadastro/1">Cadastro 1</Link>
        <img id="rightImg" src="https://c.smartrecruiters.com/sr-careersite-image-prod-dc5/5f8ece230e547939dcebadda/7f1d816b-019e-4deb-a51e-03e93c0ea90d?r=s3-eu-central-1" alt="" />
      </div>
    </div>
  );
}

export default Cadastro1;
