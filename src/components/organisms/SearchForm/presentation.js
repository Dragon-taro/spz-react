import React from "react";
import { TextInput } from "../../atoms/Input";
import { PrimaryButton } from "../../atoms/Button";

const SearchForm = ({ value, handleSubmit, handleChange }) => {
  return (
    <div>
      <TextInput value={value} onChnage={handleChange} />
      <PrimaryButton onCliclk={handleSubmit} />
    </div>
  );
};

export default SearchForm;
