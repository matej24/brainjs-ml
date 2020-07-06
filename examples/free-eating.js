const brain = require('brain.js');
const restaurants = require('../data/restaurants.json');

const trainingData = [];

for (let restName in restaurants) {
    const dayOfWeek = restaurants[restName];
    trainingData.push({
        input: { [dayOfWeek]: 1 },
        output: { [restName] : 1 }
    })
}

const net = new brain.NeuralNetwork({ hiddenLayers: [3]});

const stats = net.train(trainingData);

console.log(stats)

console.log(net.run({ "Monday": 1}))

function restorauntForDay(dayOfWeek) {
    const result = net.run({[dayOfWeek] : 1});
    let highestValue = 0;
    let highestRestorauntName = '';

    for (let restName in result){
        if(result[restName] > highestValue){
            highestValue = result[restName];
            highestRestorauntName = restName
        }
    }
    return highestRestorauntName
}

console.log(restorauntForDay('Monday'));