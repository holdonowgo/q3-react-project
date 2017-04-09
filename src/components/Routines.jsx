import React, { Component } from 'react';
import banner from '../banner.jpg';
import allExercises from '../data/exercises';
import {bicepRoutines, tricepRoutines} from '../data/routines';
console.log(bicepRoutines);

class Routines extends Component {
  render() {
    var cards = bicepRoutines.map(function(exercise) {
      return (
        <div className="card">
          <img src={banner} />
          <div className="card-section">
            <h3>{exercise.name}</h3>
          </div>
        </div>
      );
    });

    return (
      <div>
        {cards}
      </div>
    );
  }
}

export default Routines;
