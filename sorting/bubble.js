const Timer = require('../timer')
let myTimer = new Timer()

class BubbleSort {
    constructor(myColors, mySizes, myFabrics) {
        this.colors = myColors
        this.sizes = mySizes
        this.fabrics = myFabrics
    }
    
    sort(array, timer, printout) {
        var arr = [...array] // var arr = Object.assign([], array)
        var i, j;
        var len = arr.length;
        var isSwapped = false;
        if(printout) console.log(array) // Original array
        if(timer) myTimer.start()
        for (i = 0; i < len; i++) {
            isSwapped = false;
            for (j = 0; j < len - 1; j++) { // Amend in order to work for the Size values of a RandomTShirt
                if(this.sizes.getIndexBySizeValue(arr[j].size) > this.sizes.getIndexBySizeValue(arr[j+1].size)) {
                // if (arr[j] > arr[j + 1]) {
                    var temp = arr[j]
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    isSwapped = true;
                }
            }
            // IF no two elements were swapped by inner loop, then break 
            if (!isSwapped) {
                break;
            }
        }
        if(timer) {
            myTimer.stop()
            console.log(myTimer.time)
        }
        if(printout) console.log(arr) // Sorted array
    }
}

module.exports = BubbleSort