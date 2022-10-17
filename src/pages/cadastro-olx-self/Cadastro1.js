import "./Cadastro.css";

import CadastroTop from "../../components/cadastro-top/CadastroTop";
import AvancarCadastro from "../../components/bt-avancar-cadastro/AvancarCadastro"
import HeaderCadastro from "../../components/header-cadastro/HeaderCadastro";
import FormInput from "../../components/form-input/FormInput";


import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


function Cadastro1() {
  return (
    <div>
      <HeaderCadastro />
      <div className="grid2">
        <div className="cadastroThings">
          <CadastroTop
            titulo="Faça login para anunciar com rapidez"
            desc="Seus dados são criptografados e estão armazenados em um ambiente seguro"/>
          <br/>
          <br/>
          <div>
            <FormInput label="USUÁRIO" type="text" icon={<PersonIcon/>}/>
            <FormInput label="EMAIL" type="email" icon={<EmailIcon/>}/>
            <FormInput label="SENHA" type="password" icon={<VisibilityOffIcon/>}/>
          </div>
          <br></br>
          <AvancarCadastro texto="Cadastrar" para="/cadastro/2"/>
          <p className="caixaTexto 1">Ao se cadastrar você concorda com nossos Termos de Condições de Uso e Políticas de Privacidade.</p>
        </div>
        <div className="rightDiv-cadastro">
          <img id="rightImg" src="https://c.smartrecruiters.com/sr-careersite-image-prod-dc5/5f8ece230e547939dcebadda/7f1d816b-019e-4deb-a51e-03e93c0ea90d?r=s3-eu-central-1" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Cadastro1;
