//response reducer.

const routines = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ROUTINES_FULFILLED':
      // return {
      //   ...state,
      //   bicepRoutines: action.payload.bicepRoutines,
      //   chestRoutines: action.payload.chestRoutines,
      //   shoulderRoutines: action.payload.shoulderRoutines,
      //   tricepRoutines: action.payload.tricepRoutines
      // };
      console.log('payload:', action.payload);
      return action.payload.slice(0, 3);
    default:
      return state;
  }
}

export default routines;
