import "./FormInput.css";

function FormInput({ label, type, icon}) {
  return (
    <div className="formInput">
      <label>{label}</label>
      <input type={type} />
      {icon}
    </div>
  );
}

export default FormInput;
