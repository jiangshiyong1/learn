class Publisher {
    constructor() {
        this.observers = []
        console.log('publish created');
    }

    add(observer) {
        this.observers.push(observer)
    }

    remove(observer) {
        this.observers.forEach((item, i) => {
            if (observer === item) {
                this.observers.splice(i, 1)
            }
        })
    }
    notify() {
        this.observers.forEach(observer => {
            observer.update(this)
        })
    }
}

class Observer {
    constructor() {
        console.log('observer created');
    }
    update() {
        console.log('obersver.update invoked');

    }
}

// const pub = new Publisher()
// const obs = new Observer()

// pub.add(obs)
// pub.notify()

class PrdPublisher extends Publisher {
    constructor() {
        super()
        this.prdState = null
        this.observers = []
        console.log('prdPublish created');

    }

    getState() {
        return this.prdState
    }

    setState(state) {
        this.prdState = state
        this.notify()
    }
}

class DeveloperOberver extends Observer {
    constructor() {
        super()
        this.prdState = {}
        console.log('developerObersver created');

    }

    update(publisher) {
        this.prdState = publisher.getState()
        this.work()
    }

    work() {
        const prd = this.prdState
        console.log('996开始');

    }
}

const lilei = new DeveloperOberver()
const A = new DeveloperOberver()
const b = new DeveloperOberver()

const hanMeiMei = new PrdPublisher()

const prd = {}

hanMeiMei.add(A)
hanMeiMei.add(lilei)
hanMeiMei.add(b)
hanMeiMei.setState(prd)