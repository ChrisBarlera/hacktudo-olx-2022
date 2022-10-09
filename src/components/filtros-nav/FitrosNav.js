import './FiltrosNav.css';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PetsIcon from '@mui/icons-material/Pets';
import { Chair } from '@mui/icons-material';

function FiltrosNav() {
    return (
        <ul className='filtros-nav'>
            <li className='filtro-nav-item'> <OfflineBoltIcon/> Sem fiador</li>
            <li className='filtro-nav-item'> <Chair/> Mobiliado</li>
            <li className='filtro-nav-item'> <PetsIcon/> Aceita pets</li>
            <li className='filtro-nav-item'> <EmojiPeopleIcon/> Morar sozinho</li>
            <li className='filtro-nav-item'> <DirectionsCarIcon/> Vaga de garagem</li>
        </ul>
    );
}

export default FiltrosNav;