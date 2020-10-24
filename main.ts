input.onGesture(Gesture.Shake, function () {
    a = randint(1, 10)
    basic.showNumber(a)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    b = randint(1, 10)
    basic.showNumber(b)
    basic.showLeds(`
        . # # # .
        # . . . #
        . . . # .
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    basic.showNumber(a + b)
})
let b = 0
let a = 0
a = 0
b = 0
