const Timer = require('../timer')
let myTimer = new Timer()

class BubbleSort {
    sort(array, timer, printout) {
        var arr = [...array] // var arr = Object.assign([], array)
        var i, j;
        var len = arr.length;
        var isSwapped = false;
        // let myTimer = new Timer(false)

        if(printout) console.log(array) // Original array
        myTimer.start()
        for (i = 0; i < len; i++) {
            isSwapped = false;
            for (j = 0; j < len; j++) {
                if (arr[j] > arr[j + 1]) {
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
        myTimer.stop()
        console.log(myTimer.time)
        if(printout) console.log(arr) // Sorted array
    }
}

module.exports = BubbleSort