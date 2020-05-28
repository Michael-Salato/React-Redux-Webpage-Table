import React from "react";

function renderSelectField({
  input,
  meta: { touched, error, warning },
  children,
}) {
  return (
    <React.Fragment>
      <select {...input}>{children}</select>
      {touched &&
        ((error && <span className="error">{error}</span>) ||
          (warning && <span className="warning">{warning}</span>))}
    </React.Fragment>
  );
}

export default renderSelectField;
