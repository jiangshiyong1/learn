function User(name, age, career, work) {
    this.name = name
    this.age = age
    this.career = career
    this.work = work
}

function Factory(name, age, career) {
    let work
    switch (career) {
        case 'coder':
            work = ['写代码', '写系分', '修bug']
            break;
        case 'boss':
            work = ['喝茶', '看报', '开会']
        default:
            break;
    }
    return new User(name, age, career, work)
}

const corder = new Factory('zs', '19', 'coder')
const boss = new Factory('ls', '82', 'boss')
console.log(corder);
console.log(boss);
