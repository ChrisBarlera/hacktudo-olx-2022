import './DocsComponent.css';
import AddRoundedIcon from '@mui/icons-material/AddRounded';


function DocsComponent({texto}) {
    return (
        <div className="docsComponent">
            <p>{texto}</p>
            <AddRoundedIcon className="someclass"/>
        </div>
    );
}

export default DocsComponent;