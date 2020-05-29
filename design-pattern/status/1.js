class CoffeeMaker {
    constructor(){
        this.state = 'init'
        this.leftMilk = '500ml'
    }

    stateToProcessor = {
        that : this,
        american(){
            console.log(this.that.leftMilk);
            console.log('我只吐黑咖啡');
        },

        latte(){
            this.american()
            console.log('加点奶');
        },

        valilLatte(){
            this.latte()
            console.log('再加点香草糖浆'); 
        },
        mocha (){
            this.latte()
            console.log('再加巧克力');
        }

    }

    changeState(state){
        this.state = state
        if(!this.stateToProcessor[state]) return
        this.stateToProcessor[state]()
    }
}


const mk = new CoffeeMaker()
mk.changeState('mocha')