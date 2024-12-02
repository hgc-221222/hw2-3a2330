control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (lastValue != control.eventValue()) {
        lastValue = control.eventValue()
        led.stopAnimation()
        if (control.eventValue() == 1) {
            basic.showString("A")
            startbit.startbit_setMotorSpeed(100, 100)
        } else if (control.eventValue() == 3) {
            basic.showString("B")
            startbit.startbit_setMotorSpeed(-100, -100)
        } else if (control.eventValue() == 5) {
            basic.showString("C")
            startbit.startbit_setMotorSpeed(100, 0)
        } else if (control.eventValue() == 7) {
            basic.showString("D")
            startbit.startbit_setMotorSpeed(0, 100)
        } else if (control.eventValue() == 9) {
            basic.showString("1")
            music.play(music.tonePlayable(587, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        } else if (control.eventValue() == 11) {
            basic.showString("2")
            startbit.startbit_setPixelRGB(StartbitLights.Light2, StartbitRGBColors.Blue)
            startbit.startbit_showLight()
        } else if (control.eventValue() == 13) {
            basic.showString("3")
            startbit.startbit_setPixelRGB(StartbitLights.Light1, StartbitRGBColors.Red)
            startbit.startbit_showLight()
        } else if (control.eventValue() == 15) {
            basic.showString("4")
            startbit.startbit_clearLight()
        } else {
            basic.clearScreen()
            startbit.startbit_setMotorSpeed(0, 0)
        }
    }
})
let lastValue = 0
startbit.startbit_Init()
basic.pause(1000)
lastValue = 0
bluetooth.startLEDService()
basic.showString("GAMEPAD DEMO")
