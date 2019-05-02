import React from "react";
import styles from "./style.css";
import TextArea from "../../atoms/TextArea";

const LabeledTextarea = ({ label, className, ...props }) => {
  return (
    <div className={[styles.labeledTextarea, className].join(" ")}>
      {label && <span>{label}</span>}
      <TextArea {...props} />
    </div>
  );
};

export default LabeledTextarea;

// HOCで抽象化（この関数は本来別の所に書くべき）
const LabeledFormElement = Component => ({ label, ...props }) => (
  <>
    {label && <span>{label}</span>}
    <Component {...props} />
  </>
);

// exportしてるけど使ってない
export const HOCLabeledTextarea = LabeledFormElement(TextArea);
