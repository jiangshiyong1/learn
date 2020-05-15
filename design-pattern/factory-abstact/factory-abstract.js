// class MobilePhoneFactory {
//     creatOs() {
//         throw new Error('抽象工厂方法不允许直接调用，你需要将我重写！')
//     }
//     createHardWare() {
//         throw new Error('抽象工厂方法不允许直接调用，你需要将我重写')
//     }
// }

// class FakeStarFactory extends MobilePhoneFactory {
//     creatOs() {
//         return new AndroidOs()
//     }
//     createHardWare() {
//         return new QualcommHardWare()
//     }
// }

// class OS {
//     controlHardWare() {
//         throw new Error('抽象产品方法不可直接调用，需要重写')
//     }
// }

// class AndroidOs extends OS {
//     controlHardWare() {
//         console.log("我会用android的方式去操作系统啦");

//     }
// }

// class AppleOS extends OS {
//     controlHardWare() {
//         console.log('我会用ios的方式去操作硬件啦');

//     }
// }

// class HardWare {
//     operateByOrder() {
//         throw new Error('抽象产品方法不允许直接调用')
//     }
// }

// class QualcommHardWare extends HardWare {
//     operateByOrder() {
//         console.log('我会用高通的方式去运转');

//     }
// }

// class MiWare extends HardWare {
//     operateByOrder() {
//         console.log("我会用小米的方式去运转");

//     }
// }

// const myPhone = new FakeStarFactory()
// const myOs = myPhone.creatOs()
// const myHardWare = myPhone.createHardWare()
// myOs.controlHardWare()
// myHardWare.operateByOrder()