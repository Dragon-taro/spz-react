import React from "react";
import styles from "./style.css";

const inputFactory = type => props => {
  return <input className={styles[type]} type={type} {...props} />;
};

export const TextInput = inputFactory("text");
export const CheckBox = inputFactory("checkbox");
