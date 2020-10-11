import React from "react";

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

const SubMenu = (props) => {
  let itemList = [
    <Dropdown.Item
      key="delete"
      as={Button}
      onClick={() => props.onDelete(props.id)}
    >
      Delete
    </Dropdown.Item>,
    <Dropdown.Item
      key="status"
      as={Button}
      onClick={() => props.onStatus(props.id)}
    >
      Change Status
    </Dropdown.Item>,
  ];

  if (props.isActive) {
    itemList.unshift(
      <Dropdown.Item
        key="edit"
        as={Button}
        onClick={() => props.onEdit(props.id)}
      >
        Edit
      </Dropdown.Item>
    );
  }

  if (!props.isMyCard) {
    if (!props.favCards.includes(props.id)) { //id array
      itemList = [
        <Dropdown.Item
          key="add"
          as={Button}
          onClick={() => props.onAdd(props.id)}
        >
          Add to Port.
        </Dropdown.Item>,
      ];
    } else {
      itemList = [
        <Dropdown.Item
          key="remove"
          as={Button}
          onClick={() => props.onRemove(props.id)}
        >
          Remove
        </Dropdown.Item>,
      ];
    }
  }
  return (
    <DropdownButton className={props.className} id="sub-menu" title="">
      {itemList}
    </DropdownButton>
  );
};

export default SubMenu;
