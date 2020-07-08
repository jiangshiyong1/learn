
var CQueue = function() {
    this.enQueue = []
    this.ouQueue = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.enQueue.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if(this.ouQueue.length == 0) {
        while (this.enQueue.length > 0) {
            this.ouQueue.push(this.enQueue.pop())
        } 
    }

    if(this.ouQueue.length == 0) {
        return -1
    } else {
        return this.ouQueue.pop()
    }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */