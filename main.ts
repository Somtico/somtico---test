input.onButtonPressed(Button.A, function () {
    led.stopAnimation()
    for (let index = 0; index < 5; index++) {
        basic.showIcon(IconNames.Happy)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 1000; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(100)
    }
    basic.clearScreen()
})
