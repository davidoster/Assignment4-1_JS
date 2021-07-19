const performance = require('perf_hooks').performance
var randomArray = require('./randomarray')
let startTime = performance.now()
let myArray = randomArray(100000000)
let endTime = performance.now()
console.log(endTime - startTime)
// console.log(myArray)