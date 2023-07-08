import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./dialogItem/DialogItem";
import {useDispatch, useSelector} from "react-redux";
import Message from "./message/Message";
import {addMessage} from "../../redux/actions/messagesPageActions";

const Dialogs = () => {
  const myMessages = useSelector(state => state.messagesPageReducer.messages)
  const myDialogs = useSelector(state => state.messagesPageReducer.dialogs)

  let dialogsElements = myDialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
  let messagesElements = myMessages.map(m => <Message message={m.message} />)

  return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {dialogsElements}
        </div>
        <div className={s.messages}>
          <div>{messagesElements}</div>
        </div>
        <div>
          <div><textarea placeholder='Enter your message' ></textarea></div>
          <div><button onClick={() => addMessage()}>Send</button></div>
        </div>
      </div>
  );
};

export default Dialogs;