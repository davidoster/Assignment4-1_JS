// const performance = require('perf_hooks').performance
const Timer = require('./timer')
var randomArray = require('./randomarray')
let myTimer = new Timer(true)
// myTimer.start() // myTimer.start()
let myArray = randomArray(100)
myTimer.stop() // myTimer.end()
console.log(myTimer.time) // console.log(myTimer.elapsedTime)
// console.log(myArray)