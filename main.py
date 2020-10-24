def on_gesture_shake():
    global a
    a = randint(1, 10)
    basic.show_number(a)
    basic.show_leds("""
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        """)
    global b
    b = randint(1, 10)
    basic.show_number(b)
    
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

a = 0
a = 0
b = 0
