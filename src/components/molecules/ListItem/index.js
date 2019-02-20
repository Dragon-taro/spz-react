import React from "react";
import { CheckBox } from "../../atoms/Input/index";
import { WarningButton } from "../../atoms/Button/index";

const ListItem = ({ id, children, done, handleChange, handleDelete }) => {
  return (
    <li>
      <CheckBox checked={done} onChange={handleChange} />
      {children}
      <WarningButton onClick={handleDelete(id)} />
    </li>
  );
};

export default ListItem;
