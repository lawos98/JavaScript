let SetIntervalTime = []
let SetTimeoutTime = []
let delay = document.getElementById("delay").value;
let N=20;
console.log(delay)

document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);

let timeoutId = 0;
let animationFrameId=0;
let intervalId=0;

function doTimeConsumingCalculationsWithSetInterval() {
    SetIntervalTime.push(performance.now());
    if (SetIntervalTime.length > N){
        SetIntervalTime.shift();
    }
    calculatePrimes(1000, 1000000);
}

function doTimeConsumingCalculationsWithSetTimeout() {
    SetTimeoutTime.push(performance.now());
    if (SetTimeoutTime.length > N){
        SetTimeoutTime.shift();
    }
    calculatePrimes(1000, 1000000);
    timeoutId = window.setTimeout(doTimeConsumingCalculationsWithSetTimeout, delay);
}

function getAverageExecutionTime(array) {
    let total = 0;
    let len=array.length
    if (len<2)return 0

    array.forEach(function(item, index) {
        if(index!==len-1){
            total += array[index+1]-item
        }
    });

    return total / len-1;
}

function calculatePrimes(iterations, multiplier) {
    const primes = [];
    for (let i = 0; i < iterations; i++) {
        const candidate = i * (multiplier * Math.random());
        let isPrime = true;
        for (let c = 2; c <= Math.sqrt(candidate); ++c) {
            if (candidate % c === 0) {
                // not prime
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(candidate);
        }
    }
    return primes;
}

var mainChart;

window.onload = function () {
    mainChart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: "Czasy wykonania obliczeń"
        },
        axisY: {
            title: "Czas w milisekundach",
            suffix: " ms"
        },
        data: [
            {
                type: "column",
                indexLabelFontColor: "#000000",
                indexLabelFontSize: 10,
                dataPoints: []
            }
        ]
    });
    mainChart.render();
};

const addResultToChart = function (chart, type, result) {
    chart.data[0].options.dataPoints.push({ y: result, label: type });
    chart.render();
};

function drawChart() {
    addResultToChart(mainChart, "timeout", getAverageExecutionTime(SetTimeoutTime));
    addResultToChart(mainChart, "Interval", getAverageExecutionTime(SetIntervalTime));
    animationFrameId = window.requestAnimationFrame(drawChart);
}

function start() {
    delay = document.getElementById("delay").value;
    intervalId = window.setInterval(doTimeConsumingCalculationsWithSetInterval, delay);
    timeoutId = window.setTimeout(doTimeConsumingCalculationsWithSetTimeout, delay);
    animationFrameId = window.requestAnimationFrame(drawChart);
}

function stop() {
    window.clearInterval(intervalId);
    window.clearTimeout(timeoutId);
    window.cancelAnimationFrame(animationFrameId);
    SetIntervalTime=[]
    SetTimeoutTime=[]
}
