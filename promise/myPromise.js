const PENDDING = 'pendding'
const FUFILLED = 'fufilled'
const REJECTED = 'rejected'

function Promise(exctor) {

    const self = this
    self.value = ''
    self.err = ''
    self.status = PENDDING
    self.onFufilledCallBacks = []
    self.onRejectedCallBacks = []

    function resolve(value) {
        if (self.status === PENDDING) {
            self.status = FUFILLED
            self.value = value

            self.onFufilledCallBacks.forEach(fn => {
                fn()
            });
        }
    }

    function reject(error) {
        if (self.status === PENDDING) {
            self.err = error
            self.status = REJECTED
            self.onRejectedCallBacks.forEach(fn => {
                fn()
            })
        }
    }


    try {
        exctor(resolve, reject)
    } catch (error) {
        reject(error)
    }
}


function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        return reject(new TypeError('循环引用了'))
    }
    let called
    if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        try {
            let then = x.then
            if (typeof then === 'function') {
                then.call(x, function (y) {
                    if (called) return
                    called = true
                    resolvePromise(promise2, y, resolve, reject)
                }, function (err) {
                    if (called) return
                    called = true
                    reject(err)
                })
            } else {
                resolve(x)
            }
        } catch (error) {
            if (called) return
            called = true
            reject(error)
        }

    } else {
        resolve(x)
    }
}

Promise.prototype.then = function (onfufilled, onrejected) {
    onfufilled = typeof onfufilled === 'function' ? onfufilled : value => value
    onrejected = typeof onrejected === 'function' ? onrejected : err => {
        throw err
    }

    let self = this
    let promise2

    if (self.status === FUFILLED) {
        return promise2 = new Promise(function (resolve, reject) {
            setTimeout(() => {
                try {
                    let x = onfufilled(self.value)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (error) {
                    reject(error)
                }
            });
        })
    }

    if (self.status === REJECTED) {
        return promise2 = new Promise(function (resolve, reject) {
            setTimeout(() => {
                try {
                    let x = onrejected(self.err)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (error) {
                    reject(error)
                }
            });
        })
    }

    if (self.status === PENDDING) {
        return promise2 = new Promise(function (resolve, reject) {
            self.onFufilledCallBacks.push(function () {
                setTimeout(() => {
                    try {
                        let x = onfufilled(self.value)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                });
            })

            self.onRejectedCallBacks.push(function () {
                setTimeout(() => {
                    try {
                        let x = onrejected(self.err)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                });
            })
        })
    }

}

Promise.prototype.catch = function (onReject) {
    this.then(null, onrejected)
}

Promise.all = function (promises) {
    return new Promise(function (resolve, reject) {
        let result = []
        let count = 0
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(function (data) {
                result[i] = data
                if (++count == promises.length) {
                    resolve(result)
                }
            }, reject)
        }
    })
}

Promise.race = function (promises) {
    return new Promise(function (resolve, reject) {
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(resolve, reject)
        }
    })
}

Promise.defer = Promise.deferred = function () {
    let dfd = {};
    dfd.promise = new Promise(function (resolve, reject) {
        dfd.resolve = resolve;
        dfd.reject = reject;
    });
    return dfd
}

module.exports = Promise