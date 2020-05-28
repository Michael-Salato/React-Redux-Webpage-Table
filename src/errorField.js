import React from "react";

function errorField({
  input,
  label,
  type,
  min,
  max,
  meta: { touched, error, warning },
}) {
  return (
    <React.Fragment>
      <input {...input} type={type} placeholder={label} min={min} max={max} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </React.Fragment>
  );
}

export default errorField;
