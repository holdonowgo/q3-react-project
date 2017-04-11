var _ = require('lodash');
import exercises from "../data/exercises";

const donut = {
    size: {
          height: 240,
          width: 480
    },
    data: {
        // iris data from R
        columns: [
            ['data1', 30],
            ['data2', 120],
        ],
        type : 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
      title: 'My Title'
    }
};

var result = [];
exercises.reduce(function (res, value) {
    if (!res[value.muscle.name]) {
        res[value.muscle.name] = {
            qty: 0,
            muscle: value.muscle.name
        };
        result.push(res[value.muscle.name])
    }
    res[value.muscle.name].qty += 1
    return res;
}, {});

console.log(result);

let columns = result.map((obj) => {
  return [obj.muscle, obj.qty]
});

// console.log(donut.columns.toString());
// console.log(columns.toString());

donut.data.columns = columns;

export default donut;
