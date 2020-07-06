const brain = require('brain.js');
const data = require('../data/data.json');

const network = new brain.recurrent.LSTM(); //Long-short term memory

const trainingData = data.map(item => ({
    input: item.text,
    output: item.category
}));

network.train(trainingData, {
    iterations: 2000
});
// NOTE! iterations by default is 20k but it will take very long
// for PC to render it, so it was set to lower number, but 
// higher the iterations more accurate the results, of course if you 
// got enough data

const output = network.run('I fixed the power supply');

console.log(`Category: ${output}`);