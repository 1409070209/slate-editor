enum AUXILIARY_ENUM {
    altKey = 'altKey',
    shiftKey = 'shiftKey',
    ctrlKey = 'ctrlKey'
}
enum KEY_ENUM {
    enter = 13,
    del = 8
}
const KeyMap = {}

export default function keyDownHandle(event:KeyboardEvent) {
    const key = []
    const auxiliaryKeys: AUXILIARY_ENUM[] = [AUXILIARY_ENUM.altKey, AUXILIARY_ENUM.shiftKey, AUXILIARY_ENUM.ctrlKey]
    auxiliaryKeys.forEach((auxiliaryKey) => {
        if ((event)[auxiliaryKey]) {
            key.push(auxiliaryKey)
        }
    })

}

export {}
