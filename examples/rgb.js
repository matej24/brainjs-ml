const brain = require('brain.js');

const colors = [
    {red: 0.1, green: 0.5, blue: 0.4},
    {red: 0.5, green: 0.4, blue: 0.3},
    {red: 0.8, green: 0.3, blue: 0.7},
    {red: 0.8, green: 0.2, blue: 0.8},
    {green: 0.8, blue: 0.1},
    {red: 0.6, green: 0.9, blue: 0.1},
    {red: 0.3, blue: 0.8},
    {red: 0.1, green: 0.7, blue: 0.7},
    {red: 0.21, green: 0.5, blue: 0.3},
    {red: 0.16, green: 0.2,},
    {red: 0.9, green: 0.1, blue: 0.7},
    {red: 0.2, green: 0.1, blue: 0.1},
    {red: 0.1, green: 0.2, blue: 0.1},
    {green: 0.8},
]

const brightness = [
    {dark: 0.8},
    {neutral: 0.8},
    {light: 0.7},
    {light: 0.9},
    {light: 0.8},
    {light: 0.5},
    {light: 0.6},
    {neutral: 0.8, light: 0.5},
    {dark: 0.65, neutral: 0.5},
    {dark: 0.85, neutral: 0.3},
    {dark: 0.9},
    {dark: 0.7},
    {dark: 0.8},
    {dark: 0.6},
];

const trainingData = [];

for (let i=0; i < colors.length; i++) {
    trainingData.push({
        input: colors[i],
        output: brightness[i]
    })
}


const net = new brain.NeuralNetwork({
    hiddenLayers: [3]
})

const stats = net.train(trainingData);

console.log(stats);

console.log(net.run({
    red: 0.9
}))

const invertedTrainingData = [];

for (let i = 1; i < colors.length; i++) {
    invertedTrainingData.push({
        input: brightness[i],
        output: colors[i]
    })
}

const invertedNet = new brain.NeuralNetwork({ hiddenLayers: [3] })

const invertedStats = invertedNet.train(invertedTrainingData);

console.log(invertedStats)