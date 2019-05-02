import React from "react";
import { TextInput } from "../../atoms/Input/index";
import styles from "./style.css";

const LabeledInput = ({ label, className, ...props }) => {
  return (
    <div className={[styles.labeledInput, className].join(" ")}>
      {label && <span>{label}</span>}
      <TextInput {...props} />
    </div>
  );
};

export default LabeledInput;
