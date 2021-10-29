basic.forever(function () {
    if (input.lightLevel() > 40) {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Forever)
    }
})
basic.forever(function () {
    if (input.lightLevel() > 40) {
        basic.showString("EGUN ON")
    }
})
