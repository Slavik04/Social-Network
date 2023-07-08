export const ADD_POST = "ADD_POST"

export const addPost = (dispatch, inputValue) => {
  const post = {
    message: inputValue,
    likesCount: 0,
  }
  dispatch({type: ADD_POST, payload: inputValue})
}