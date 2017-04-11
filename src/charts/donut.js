var _ = require('lodash');
import {exercises, exerciseTypes} from "../data/exercises";

export const muscleDonut = {
    size: {
          height: 240,
          width: 480
    },
    data: {
        // iris data from R
        columns: [],
        type : 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
      title: 'My Title'
    }
};
export const typeDonut = {
    size: {
          height: 240,
          width: 480
    },
    data: {
        // iris data from R
        columns: [],
        type : 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
      title: 'My Title'
    }
};
export const equipmentDonut = {
    size: {
          height: 240,
          width: 480
    },
    data: {
        // iris data from R
        columns: [],
        type : 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
      title: 'My Title'
    }
};

let muscleResult = [];

console.log('exercises:', exercises);
let mappedMuscles = exercises.map((exercise, index) => {
  if (index % 17 === 0) {
    return {...exercise, muscle: {id: exercise.muscle.id, name: 'Hamstrings'}};
  } else if (index % 16 === 0){
      return {...exercise, muscle: {id: exercise.muscle.id, name: 'Triceps'}};
  } else if (index % 15 === 0){
      return {...exercise, muscle: {id: exercise.muscle.id, name: 'Glutes'}};
  } else if (index % 14 === 0){
      return {...exercise, muscle: {id: exercise.muscle.id, name: 'Traps'}};
  } else if (index % 13 === 0){
      return {...exercise, muscle: {id: exercise.muscle.id, name: 'Forearms'}};
  } else if (index % 12 === 0){
      return {...exercise, muscle: {id: exercise.muscle.id, name: 'Shoulders'}};
  } else if (index % 11 === 0){
      return {...exercise, muscle: {id: exercise.muscle.id, name: 'Chest'}};
  } else if (index % 10 === 0){
      return {...exercise, muscle: {id: exercise.muscle.id, name: 'Quadriceps'}};
  } else if (index % 9 === 0){
      return {...exercise, muscle: {id: exercise.muscle.id, name: 'Calves'}};
  } else if (index % 8 === 0){
      return {...exercise, muscle: {id: exercise.muscle.id, name: 'Neck'}};
  } else if (index % 7 === 0){
      return {...exercise, muscle: {id: exercise.muscle.id, name: 'Biceps'}};
  } else if (index % 6 === 0){
      return {...exercise, muscle: {id: exercise.muscle.id, name: 'Middle Back'}};
  } else if (index % 5 === 0){
      return {...exercise, muscle: {id: exercise.muscle.id, name: 'Adductors'}};
  } else if (index % 4 === 0){
      return {...exercise, muscle: {id: exercise.muscle.id, name: 'Lower Back'}};
  } else if (index % 3 === 0){
      return {...exercise, muscle: {id: exercise.muscle.id, name: 'Abductors'}};
  } else if (index % 2 === 0){
      return {...exercise, type: {id: exercise.muscle.id, name: 'Lats'}};
  } else if (index % 1 === 0){
      return {...exercise, type: {id: exercise.muscle.id, name: 'Abdominals'}};
  }
});

console.log('mappedMuscles:', mappedMuscles);

mappedMuscles.reduce(function (res, value) {
    if (!res[value.muscle.name]) {
        res[value.muscle.name] = {
            qty: 0,
            muscle: value.muscle.name
        };
        muscleResult.push(res[value.muscle.name]);
    }
    res[value.muscle.name].qty += 1;
    return res;
}, {});

console.log('muscleResult:', muscleResult);

let columns = muscleResult.map((obj) => {
  return [obj.muscle, obj.qty];
});

console.log('columns:', columns);

muscleDonut.data.columns = columns;

///////////////////////////////////////////////////////////////////////////////

let typeResult = [];

let mappedTypes = exercises.map((exercise, index) => {
  if (index % 7 === 0) {
    return {...exercise, type: {id: exercise.type.id, name: 'Strongman'}};
  } else if (index % 6 === 0){
      return {...exercise, type: {id: exercise.type.id, name: 'Stretching'}};
  } else if (index % 5 === 0){
      return {...exercise, type: {id: exercise.type.id, name: 'Strength'}};
  } else if (index % 4 === 0){
      return {...exercise, type: {id: exercise.type.id, name: 'Powerlifting'}};
  } else if (index % 3 === 0){
      return {...exercise, type: {id: exercise.type.id, name: 'Plyometrics'}};
  } else if (index % 2 === 0){
      return {...exercise, type: {id: exercise.type.id, name: 'Olympic Weightlifting'}};
  } else if (index % 1 === 0){
      return {...exercise, type: {id: exercise.type.id, name: 'Cardio'}};
  }
});

mappedTypes.reduce(function (res, value) {
    if (!res[value.type.name]) {
        res[value.type.name] = {
            qty: 0,
            type: value.type.name
        };
        typeResult.push(res[value.type.name]);
    }
    res[value.type.name].qty += 1;
    return res;
}, {});

columns = typeResult.map((obj) => {
  return [obj.type, obj.qty]
});

typeDonut.data.columns = columns;

///////////////////////////////////////////////////////////////////////////////

let equipmentResult = [];

exercises.reduce(function (res, value) {
    if (!res[value.equipment.name]) {
        res[value.equipment.name] = {
            qty: 0,
            equipment: value.equipment.name
        };
        equipmentResult.push(res[value.equipment.name]);
    }
    res[value.equipment.name].qty += 1;
    return res;
}, {});

columns = equipmentResult.map((obj) => {
  return [obj.equipment, obj.qty];
});

equipmentDonut.data.columns = columns;
