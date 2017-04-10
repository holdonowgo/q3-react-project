import {bicepRoutines, chestRoutines, shoulderRoutines, tricepRoutines} from '../data/routines';
import React, { Component } from 'react';
import axios from 'axios';
import * as Routes from "../helpers/api";

// should be a pure function
export const doSearch = () => {
  var config = {
    headers: {'X-My-Custom-Header': 'Header-Value'}
  };

  // axios.get(Routes.GET_ROUTINES, config);
  var data = {
    chestRoutines: chestRoutines,
    shoulderRoutines: shoulderRoutines,
    tricepRoutines: tricepRoutines
  };

  axios.get(Routes.GET_ROUTINES)
  .then((result) => {
    data['bicepRoutines'] = result.data;
  });

  return {
    type: 'DO_SEARCH',
    payload: data
  };
}
