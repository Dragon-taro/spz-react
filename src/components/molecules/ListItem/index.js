import React from "react";
import { CheckBox } from "../../atoms/Input/index";
import { WarningButton } from "../../atoms/Button/index";
import styles from "./style.css";

const ListItem = ({ id, children, done, handleChange, handleDelete }) => {
  return (
    <li className={styles.items}>
      <CheckBox checked={done} onChange={handleChange} />
      <span>{children}</span>
      <WarningButton onClick={() => handleDelete(id)}>Delete</WarningButton>
    </li>
  );
};

export default ListItem;
