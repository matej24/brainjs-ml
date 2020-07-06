const brain = require('brain.js');
const data = require('../data/igranje.json');

const network = new brain.recurrent.LSTM(); //Long-short term memory

const trainingData = data.map(item => ({
    input: item.text,
    output: item.category
}));

network.train(trainingData, {
    iterations: 4000,
    log: (err) => console.log(err)
});

const output = network.run('Zlicom jedemo juhu');


console.log(`Category: ${output}`);