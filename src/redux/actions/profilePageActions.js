export const ADD_POST = "ADD_POST"

export const addPost = (dispatch, inputValue, evt) => {
  evt.preventDefault();

  const post = {
    message: inputValue,
    likesCount: 0,
  };
  dispatch({type: ADD_POST, payload: inputValue})
};