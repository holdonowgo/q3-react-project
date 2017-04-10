var _ = require('lodash');
import exercises from "../data/exercises";

const pie = {
    data: {
        // iris data from R
        columns: [
            ['data1', 30],
            ['data2', 120],
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
}

var result = [];
exercises.reduce(function (res, value) {
    if (!res[value.muscle.id]) {
        res[value.muscle.id] = {
            qty: 0,
            Id: value.muscle.id
        };
        result.push(res[value.muscle.id])
    }
    res[value.muscle.id].qty += 1
    return res;
}, {});

console.log(result);

let columns = result.map((obj) => {
  return [obj.Id.toString(), obj.qty]
});

// console.log(pie.columns.toString());
// console.log(columns.toString());

pie.data.columns = columns;

export default pie;
