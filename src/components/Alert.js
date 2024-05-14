import React from "react";

const Alert = (props) => {

  const capitalize = (word) => {
    let capWord = word.toLowerCase();
    if (word === "danger") {
      word = "error";
    }
    return capWord.charAt(0).toUpperCase() + capWord.slice(1);
  };
  return (
    <>
      <div style={{ height: "45px" }}>
        {props.alert && (
          <div
            className={`alert alert-${props.alert.type} fade show d-flex justify-content-center align-items-center`}
          >
            <span className="me-auto px-3">
              <strong>{capitalize(props.alert.type)}: </strong>
              {props.alert.message}
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default Alert;
