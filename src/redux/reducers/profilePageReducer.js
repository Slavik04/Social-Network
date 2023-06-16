import ADD_POST from "../actions/profilePageActions"

const defaultState = {
  posts: [],
}

export const profilePageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {...state, posts: [...state.posts, action.payload]}
    default:
      return state;
  }
}