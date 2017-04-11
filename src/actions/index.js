import {bicepRoutines, chestRoutines, shoulderRoutines, tricepRoutines} from '../data/routines';
import axios from 'axios';
import * as Routes from "../helpers/api";

// should be a pure function
export const fetchRoutines = (muscle) => {
  var config = {
    headers: {'X-My-Custom-Header': 'Header-Value'}
  };

  let url = '';
  switch(muscle) {
    case 'biceps':
      url = Routes.GET_ROUTINES_BICEPS;
      break;
    case 'chest':
      url = Routes.GET_ROUTINES_CHEST;
      break;
    case 'shoulders':
      url = Routes.GET_ROUTINES_SHOULDERS;
      break;
    case 'triceps':
      url = Routes.GET_ROUTINES_TRICEPS;
      break;
  }

  let data = axios.get(url)
  .then((result) => {
    return result.data;
  });

  return {
    type: 'FETCH_ROUTINES',
    payload: data
  };
}

export const fetchExercises = () => {
  let data = axios.get(Routes.GET_EXERCISES)
  .then((result) => {
    return result.data;
  });

  return {
    type: 'FETCH_EXERCISES',
    payload: data
  };
}
