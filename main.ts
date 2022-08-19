enum RadioMessage {
    message1 = 49434,
    music = 21286
}
namespace SpriteKind {
    export const apartment = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.overlapsWith(mySprite3)) {
        mySprite3.destroy()
        mySprite2.destroy()
        otherSprite.destroy()
        mySprite.destroy()
        mySprite2 = sprites.create(assets.image`good`, SpriteKind.Player)
        mySprite2.setPosition(19, 100)
        mySprite = sprites.create(assets.image`cursor`, SpriteKind.Player)
        controller.moveSprite(mySprite)
        scene.setBackgroundImage(assets.image`myImage`)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.overlapsWith(Apartments)) {
        msuic = 1
        mySprite.destroy()
        Apartments.destroy()
        mySprite2 = sprites.create(assets.image`good`, SpriteKind.Player)
        mySprite2.setPosition(19, 100)
        mySprite = sprites.create(assets.image`cursor`, SpriteKind.Player)
        controller.moveSprite(mySprite)
        scene.setBackgroundImage(assets.image`myImage`)
    }
    if (mySprite.overlapsWith(mySprite2)) {
        mySprite2.destroy()
        mySprite.destroy()
        msuic = 2
        mySprite3 = sprites.create(assets.image`back`, SpriteKind.Player)
        otherSprite = sprites.create(assets.image`idle`, SpriteKind.Player)
        otherSprite.setPosition(74, 71)
        mySprite3.setPosition(23, 97)
        mySprite3.scale = 3
        otherSprite.scale = 3
        mySprite = sprites.create(assets.image`cursor`, SpriteKind.Player)
        controller.moveSprite(mySprite)
        scene.setBackgroundImage(assets.image`inside`)
        animation.runImageAnimation(
        otherSprite,
        assets.animation`apartment mad`,
        100,
        true
        )
        game.splash("I see you had seen me,", "My look alike!")
    }
})
let otherSprite: Sprite = null
let mySprite2: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
let Apartments: Sprite = null
let msuic = 0
msuic = 0
Apartments = sprites.create(assets.image`apartments`, SpriteKind.apartment)
Apartments.scale = 2
mySprite = sprites.create(assets.image`cursor`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.setBackgroundImage(assets.image`city`)
let problem = randint(1, 10)
forever(function () {
    if (0 < msuic) {
        console.log("MUSIC IS PLAYING!!!!")
        if (1 < msuic) {
            music.playMelody("C D C D C C5 C C5 ", 120)
            console.log("inside music")
        } else {
            if (3 < msuic) {
                console.log("I NO EXIST.")
            } else {
                music.playMelody("C E C G C A C B ", 200)
                console.log("apartment music!")
            }
        }
    } else {
        console.log("No music :(")
    }
})
