class MoBilePhoneFactory {
    creatOs(){
        throw new Error('抽象工厂方法不可以直接调用')
    }
    createHardWare() {
        throw new Error('抽象工厂方法不可以直接调用')
    }
}

class fakeStarFactory extends MoBilePhoneFactory {
    creatOs(){
        return new AndroidOs()
    }
    createHardWare(){
        return new QualcommHardWare()
    }
}

class Os {
    controlHardWare (){
        throw new Error('抽象产品方法不允许直接调用，你需要将我重写！');
    }
}

class AndroidOs extends Os {
    controlHardWare () {
        console.log('我会用android的方式去操作硬件');
        
    }
}

class AppleOs extends Os {
    controlHardWare(){
        console.log('我会用apple的方式去操作硬件');
        
    }
}

class Hard {
    operateByOrder (){
        throw new Error('抽象产品方法不允许直接调用')
        
    }
}
class QualcommHardWare extends Hard {
    operateByOrder(){
        console.log('我会用高通的方式去运转');
        
    }
}

class MIWare extends Hard {
    operateByOrder(){
        console.log('我会用小米的方式去运转');
        
    }
}

const phone = new fakeStarFactory()
phone.creatOs().controlHardWare()
console.log(phone);
