
const exercises = (
//   state = [],
//   action) => {
//   switch (action.type) {
//     case 'FETCH_EXERCISES_FULFILLED':
//       return action.payload;
//     default:
//       return state;
//   }
// }

state = {data: [], status: 'complete'},
action) => {
switch (action.type) {
  case 'FETCH_EXERCISES_FULFILLED':
    return {...state, data: action.payload, status: 'complete'};
  case 'FETCH_EXERCISES_PENDING':
    return {...state, data: [], status: 'pending'};
  default:
    return state;
}
}

export default exercises;
