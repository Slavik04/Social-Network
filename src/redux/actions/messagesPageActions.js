export const ADD_MESSAGE = "ADD_MESSAGE"

export const addMessage = (dispatch, dialogsValue, e) => {
  e.preventDefault()

  const message = {
    message: dialogsValue,
  }

  dispatch({type: ADD_MESSAGE, payload: message})
}
