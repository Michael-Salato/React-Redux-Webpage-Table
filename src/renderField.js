import React from "react";

function renderField({
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
        ((error && <span className="error">{error}</span>) ||
          (warning && <span className="warning">{warning}</span>))}
    </React.Fragment>
  );
}

export default renderField;
