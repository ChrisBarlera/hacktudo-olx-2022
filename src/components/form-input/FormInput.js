import "./FormInput.css";

function FormInput({ label, type, icon}) {
  return (
    <div className="formInput">
      <label>{label}</label>
      <div>
        <input type={type} />
        {icon}
      </div>
    </div>
  );
}

export default FormInput;
