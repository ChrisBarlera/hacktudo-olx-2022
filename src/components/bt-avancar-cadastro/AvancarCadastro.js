import { Link } from 'react-router-dom';
import './AvancarCadastro.css';

function AvancarCadastro(props) {
    return <button className="btAvancarCadastro"><Link className="cadastroLink" to={props.para}>{props.texto}</Link></button>;
}

export default AvancarCadastro;