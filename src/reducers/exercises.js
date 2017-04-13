
const exercises = (
  state = {data: [], status: null}, action) => {
    switch (action.type) {
      case 'FETCH_EXERCISES_FULFILLED':
      console.log('payload:', action.payload);
        return {...state, data: action.payload, status: 'fulfilled'};
      case 'FETCH_EXERCISES_PENDING':
        return {...state, data: [], status: 'pending'};
      case 'FETCH_EXERCISES_REJECTED':
        return {...state, data: [], status: 'rejected'};
      default:
        return state;
    }
}

export default exercises;
