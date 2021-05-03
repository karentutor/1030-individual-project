import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <h3 className="label-contact" htmlFor={name}>{label}</h3>
      {/* <p htmlFor={name}>{label}</p> */}
      <input {...rest} name={name} id={name} className="form-control my-2 p-2 input" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
