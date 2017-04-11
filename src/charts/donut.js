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

exercises.reduce(function (res, value) {
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

let columns = muscleResult.map((obj) => {
  return [obj.muscle, obj.qty];
});

muscleDonut.data.columns = columns;


let typeResult = [];

exercises.reduce(function (res, value) {
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