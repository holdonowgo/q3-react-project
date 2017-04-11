const combination = {
    size: {
          height: 120,
          width: 240
    },
    data: {
        columns: [
            ['protien', 30, 20, 50, 40, 60, 50],
            ['wingspan', 200, 130, 90, 240, 130, 220],
            ['BMI', 300, 200, 160, 400, 250, 250],
            ['Height', 200, 130, 90, 240, 130, 220],
            ['MPH', 130, 120, 150, 140, 160, 150],
            ['weight', 90, 70, 20, 50, 60, 120],
        ],
        type: 'bar',
        types: {
            BMI: 'spline',
            Height: 'line',
            weight: 'area',
        },
        groups: [
            ['protien','wingspan']
        ]
    }
};

export default combination;
