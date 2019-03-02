import React from "react";
import ListItem from "../../molecules/ListItem/index";
import styles from "./style.css";

const List = ({ items = [], ...options }) => {
  return (
    <ul className={styles.list}>
      {items.map((item = {}, index) => (
        <ListItem key={item.id || index} {...options} {...item}>
          {item.content}
        </ListItem>
      ))}
    </ul>
  );
};

export default List;
