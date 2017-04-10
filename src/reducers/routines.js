//response reducer.

const routines = (
  state = {
    bicepRoutines: [],
    chestRoutines: [],
    shoulderRoutines: [],
    tricepRoutines: []
  },
  action) => {
  switch (action.type) {
    case 'DO_SEARCH_FULFILLED':
      return {
        ...state,
        bicepRoutines: action.payload.bicepRoutines,
        chestRoutines: action.payload.chestRoutines,
        shoulderRoutines: action.payload.shoulderRoutines,
        tricepRoutines: action.payload.tricepRoutines
      };
    default:
      return state
  }
}

export default routines;
