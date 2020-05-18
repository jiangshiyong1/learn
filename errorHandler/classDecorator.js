var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var classDecorator = function (target) {
    var key = Object.getOwnPropertyNames(target.prototype);
    console.log(key);
};
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.sayName = function () {
        console.log('calss A');
    };
    A = __decorate([
        classDecorator
    ], A);
    return A;
}());
var a = new A();
a.sayName();
var methodDecorator = function (target, prototypeKey, descriptor) {
    return {
        get: function () {
            return function () {
                console.log('classc method decorator');
            };
        }
    };
};
// class C {
//     @methodDecorator
//     sayName() {
//         console.log('classC name');
//     }
// }
