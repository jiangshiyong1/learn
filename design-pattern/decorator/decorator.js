function classDecorator(target) {
    target.hasDecorator = true
    return target
}

@classDecorator
class Button {

}

console.log(Button.hasDecoratorcd);
