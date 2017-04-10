import {bicepRoutines, chestRoutines, shoulderRoutines, tricepRoutines} from '../data/routines';
import React, { Component } from 'react';
import axios from 'axios';

// should be a pure function
export const doSearch = () => {
  return {
    type: 'DO_SEARCH',
    payload: {
      bicepRoutines: bicepRoutines,
      chestRoutines: chestRoutines,
      shoulderRoutines: shoulderRoutines,
      tricepRoutines: tricepRoutines
    }
  };
}
