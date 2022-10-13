import { Link } from 'react-router-dom';
import './AvancarCadastro.css';

function AvancarCadastro(props) {
    return (
        <Link to={props.para}>
            <button className="btAvancarCadastro">{props.texto}</button>
        </Link>
    )
}

export default AvancarCadastro;