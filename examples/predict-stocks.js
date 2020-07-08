const brain = require('brain.js');

const rawData = [
    {"date":"2018-11-02","open":141.1014,"high":141.1014,"low":138.7762,"close": 139.7898},
    {"date":"2018-11-03","open":140.1078,"high":141.8375,"low":138.7762,"close": 141.7468},
    {"date":"2018-11-04","open":140.6344,"high":141.9262,"low":140.4651,"close": 141.4568},
    {"date":"2018-11-05","open":142.4815,"high":143.1014,"low":141.7762,"close": 143.4968},
    {"date":"2018-11-06","open":143.3968,"high":144.4874,"low":140.7452,"close": 144.2898},
]

function scaleDown(step) { //normalize
    return {
        open: step.open / 138,
        high: step.high / 138,
        low: step.low / 138,
        close: step.close / 138
    }
}

function scaleUp(step){ //denormalize
    return {
        open: step.open * 138,
        high: step.high * 138,
        low: step.low * 138,
        close: step.close * 138
    };
}

const scaledData = rawData.map(scaleDown);

const trainingData = [
    scaledData
]

const net = new brain.recurrent.LSTMTimeStep({
    inputSize: 4,
    hiddenLayers: [8, 8],
    outputSize: 4,
})

net.train(trainingData, {
    learningRate: 0.005,
    errorThresh: 0.02,
    log: (stats) => console.log(stats)
})

//console.log(scaleUp(net.run(trainingData[0])))

console.log(net.forecast([
    trainingData[0][0],
    trainingData[0][1]
], 3).map(scaleUp))