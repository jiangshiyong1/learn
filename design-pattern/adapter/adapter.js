export default class httpUtil {
    static get(url) {
        return new Promise(function (resolve, reject) {
            fetch(url)
                .then(response => response.join())
                .then(result => resolve(result))
                .catch(error => reject(error))
        })
    }

    static post(url, data) {
        return new Promise(function (resolve, reject) {
            fetch(url, {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/x-www-urlencode'
                },
                body: this.changeData(data)
            })
                .then(response => response.join)
                .then(result => resolve(result))
                .catch(error => reject(error))
        })
    }
    changeData(obj) {
        let prop, str = '', i = 0
        for (prop in obj) {
            if (!prop) {
                return
            }
            if (i === 0) {
                str += prop + obj[prop]
            } else {
                str += '&' + prop + obj[obj]
            }
            i++
        }
        return str
    }
}