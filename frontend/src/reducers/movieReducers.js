export const movieReducer = (state = { movies: [] }, action) => {
  switch (action.type) {
    case 'GET_MOVIES':
      return { movies: action.payload }

    default:
      return state
  }
}
