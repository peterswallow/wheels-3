input.onButtonPressed(Button.A, function () {
    step = -10
    basic.pause(200)
    step = 77
})
input.onButtonPressed(Button.B, function () {
    step = 10
    basic.pause(500)
    step = 77
})
let step = 0
step = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, step + 77)
})
