import {ADD_MESSAGE} from "../actions/messagesPageActions"

const defaultState = {
  messages: [],
  dialogs: [
    {id: 1, name: "Slava"},
    {id: 2, name: "John"},
  ],
}

export const messagesPageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {...state.messages, messages: [...state.messages, action.payload]}
    default:
      return state;
  }
}