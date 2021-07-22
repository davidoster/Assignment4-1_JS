const Timer = require('../timer')
let myTimer = new Timer()

class QuickSort {
    constructor(myColors, mySizes, myFabrics) {
        this.colors = myColors
        this.sizes = mySizes
        this.fabrics = myFabrics
        this.time = 0
    }

    sort(array, timer, printout, options) {
        if(printout) {
            console.log(`Bubble SORT, ${options.attribute} - ${options.sort} - UNSORTED Array`)
            array.forEach(element => console.log(element.toString())) // Original array
        } 
        if(timer) myTimer.start()
        if(array.length < 2) return array
        let pivotIndex = Math.floor(Math.random() * (array.length - 1))
        let [front, back] = [[], []]
        array.forEach((el, index) => {
            if(index === pivotIndex) return;
            // el <= array[pivotIndex] ? front.push(el) : back.push(el)
            this.compareTShirtsByAttribute(el,array[pivotIndex],options) ? back.push(el) : front.push(el)
        })
        let xArray = [...this.sort(front, timer, printout, options), array[pivotIndex], ...this.sort(back, timer, printout, options)]
        if(timer) {
            myTimer.stop()
            this.time += myTimer.time
        }
        if(printout) {
            console.log(`Bubble SORT, ${options.attribute} - ${options.sort} - SORTED Array`)
            xArray.forEach(element => console.log(element.toString()))  // Sorted array
        }
        return xArray
    }

    sort2() {
        
    }

    compareTShirtsByAttribute(tshirt1, tshirt2, options) {
        if(options.sort == 'ASC') {
            switch(options.attribute) { // options = { attribute: 'color', sort: 'ASC'}
                case 'size':
                    return this.sizes.getIndexBySizeName(tshirt1.size) > this.sizes.getIndexBySizeName(tshirt2.size)
                case 'color':
                    // console.log(tshirt1.color, this.colors.getIndexByColorName(tshirt1.color), tshirt2.color, this.colors.getIndexByColorName(tshirt2.color))
                    return this.colors.getIndexByColorName(tshirt1.color) > this.colors.getIndexByColorName(tshirt2.color)
                case 'fabric':
                    return this.fabrics.getIndexByFabricName(tshirt1.fabric) > this.fabrics.getIndexByFabricName(tshirt2.fabric)
            }
        } else {
            switch(options.attribute) {
                case 'size':
                    return this.sizes.getIndexBySizeName(tshirt1.size) < this.sizes.getIndexBySizeName(tshirt2.size)
                case 'color':
                    return this.colors.getIndexByColorName(tshirt1.color) < this.colors.getIndexByColorName(tshirt2.color)
                case 'fabric':
                    return this.fabrics.getIndexByFabricName(tshirt1.fabric) < this.fabrics.getIndexByFabricName(tshirt2.fabric)
            }
        }
        return false
    }
}


module.exports = QuickSort