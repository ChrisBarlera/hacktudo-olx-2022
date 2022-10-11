import "./CadastroTop.css";

function CadastroTop(props) {
  return (
    <div className="cadastroTop">
      <h1>{props.titulo}</h1>
      <p>{props.desc}</p>
    </div>
  );
}

export default CadastroTop;
