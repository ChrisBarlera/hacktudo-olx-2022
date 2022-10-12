import logo from '../../../assets/OLXSelf_logo.png';
import "./Cadastro3.css";
import { Link } from 'react-router-dom';


import CadastroTop from "../../../components/cadastro-top/CadastroTop";
import DocsComponent from '../../../components/docs-component/DocsComponent';
import AvancarCadastro from '../../../components/bt-avancar-cadastro/AvancarCadastro';


function Cadastro3(){
    return(
        <div className="grid2">
            <div className="cadastroThings">
                <CadastroTop
                    titulo="Validação de Identificação"
                    desc="Precisamos que você envie uma foto sua segurando o documento com foto ao lado do seu rosto." 
                />
                <img src={logo} alt="olx self logo" width="300px" />
                <DocsComponent
                    texto = "Foto segurando o documento"
                />
                <AvancarCadastro
                    texto="Enviar"
                    para="/cadastro/3"
                />
            </div>
            <div className="rightDiv-cadastro">
                <Link to="/cadastro/2">Cadastro 2</Link>
                <img id="rightImg" src="https://c.smartrecruiters.com/sr-careersite-image-prod-dc5/5f8ece230e547939dcebadda/7f1d816b-019e-4deb-a51e-03e93c0ea90d?r=s3-eu-central-1" alt="olx brasil"></img>
            </div>
        </div>
    );
}

export default Cadastro3;