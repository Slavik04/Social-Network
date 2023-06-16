import {NavLink} from "react-router-dom";
import React from "react";
import s from "./DialogItem.module.css"

const DialogItem = (props) => {
  let path = `dialog/${props.id}`

  return (
      <div>
        <NavLink className={s.dialog} to={path}>{props.name}</NavLink>
      </div>
  )
}

export default DialogItem;