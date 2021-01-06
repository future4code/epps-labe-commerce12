import React from "react";

export function InputsItem(props, index) {
  return (
    <>
      <label key={index}>{props.rotulo}</label>
      <input />
    </>
  );
}
