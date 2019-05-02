import React from "react";
import LabeledInput from "../../molecules/LabeledInput";
import LabeledTextarea from "../../molecules/LabeledTextarea";
import { PrimaryButton } from "../../atoms/Button";
import styles from "./style.css";

const AddTodo = ({ form: { title, content }, handleSubmit, handleChange }) => {
  return (
    <div>
      <LabeledInput
        value={title}
        onChange={handleChange}
        label="title"
        name="title"
        className={styles.formElement}
      />
      <LabeledTextarea
        value={content}
        onChange={handleChange}
        label="content"
        name="content"
        className={styles.formElement}
      />
      <div className={styles.buttonZone}>
        <PrimaryButton onClick={handleSubmit}>Add</PrimaryButton>
      </div>
    </div>
  );
};

export default AddTodo;
