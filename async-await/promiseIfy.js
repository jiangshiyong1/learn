function promiseIfy (fn){
    return function(...args){
        return new Promise(function(resolve,reject){
            fn(...args, function(err, data){
                if(err) reject(err)
                resolve(data)
            })
        })
    }
}