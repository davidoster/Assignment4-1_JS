const performance = require('perf_hooks').performance

class Timer {
    constructor(autoStart = false) {
        if(autoStart) this.start()
    }

    start(){
        this.startTime = performance.now()
    }
    
    stop(){
        this.endTime = performance.now()
    } 

    get time() {
        return this.endTime - this.startTime
    }
}
module.exports = Timer