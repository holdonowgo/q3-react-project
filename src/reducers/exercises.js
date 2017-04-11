
const exercises = (
  state = [],
  action) => {
  switch (action.type) {
    case 'FETCH_EXERCISES_FULFILLED':
      return action.payload;
    default:
      return state;
  }
}

export default exercises;
