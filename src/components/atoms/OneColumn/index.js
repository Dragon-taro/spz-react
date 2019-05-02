import React from "react";
import styles from "./style.css";

const OneColumn = ({ children }) => (
  <div className={styles.oneColumn}>{children}</div>
);

export default OneColumn;
