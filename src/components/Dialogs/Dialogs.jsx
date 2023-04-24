import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  let path = `dialog/${props.id}`

  return (
      <div>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
  )
}

const Message = (props) => {
  return (
      <div className={s.dialog}>{props.message}</div>
  )
}

let dialogsData = [
  {id: 1, name: "Slava"},
  {id: 2, name: "John"},
]

const Dialogs = () => {
  return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
          <DialogItem name={dialogsData[1].name} id={dialogsData[0].id}/>
        </div>
        <div className={s.messages}>
          <Message message="Hi"/>
          <Message message="How is your life?"/>
          <Message message="Yo"/>
        </div>
      </div>
  );
};

export default Dialogs;