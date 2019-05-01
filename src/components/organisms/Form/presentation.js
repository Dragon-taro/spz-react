import React from "react";
import { TextInput } from "../../atoms/Input";
import { PrimaryButton } from "../../atoms/Button";

const Form = ({ form, handleSubmit, handleChange }) => {
  return (
    <div>
      <TextInput value={form} onChange={handleChange} />
      <PrimaryButton onClick={handleSubmit}>Add</PrimaryButton>
    </div>
  );
};

export default Form;
