class User {
    constructor(name, age, carrer, work) {
        this.age = age
        this.name = name
        this.carrer = carrer
        this.work = work
    }
}

function factory(name, age, carrer) {
    const map = {
        coder: '[写代码，写系分，修bug]',
        projectManager: '订会议室，写prd，催更',
        boss: '喝茶，看报，开会'
    }
    return new User(name, age, carrer, map.boss)
}

const u = new factory('jsy', 27, 'boss')
console.log(u);
