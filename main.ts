basic.showIcon(IconNames.Sad)
servos.P0.setAngle(25)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P2)) {
        basic.showIcon(IconNames.Happy)
        servos.P0.setAngle(140)
        basic.pause(1000)
        servos.P0.setAngle(25)
        basic.pause(1000)
        basic.showIcon(IconNames.Sad)
    }
})
