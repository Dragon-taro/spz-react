import React from "react";
import ListItem from "../../molecules/ListItem/index";

const List = ({ items = [], ...options }) => {
  return (
    <ul>
      {items.map((item = {}, index) => (
        <ListItem key={item.id || index} {...options}>
          {item.content}
        </ListItem>
      ))}
    </ul>
  );
};

export default List;
