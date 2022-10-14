import "./BotaoCard.css";

function BotaoCard({texto}) {
    return (
        <button className={`AnuncianteCardBt ${texto}`}>{texto}</button>
    );
}

export default BotaoCard;