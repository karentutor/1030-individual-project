import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group py-4">
         <h3 className="label-contact" htmlFor={name}>{label}</h3>
      <input {...rest} name={name} id={name} className="form-control my-2 p-2 input" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
