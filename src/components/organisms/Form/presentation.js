import React from "react";
import { TextInput } from "../../atoms/Input";
import { PrimaryButton } from "../../atoms/Button";

const Form = ({ value, handleSubmit, handleChange }) => {
  return (
    <div>
      <TextInput value={value} onChange={handleChange} />
      <PrimaryButton onClick={handleSubmit}>Add</PrimaryButton>
    </div>
  );
};

export default Form;
