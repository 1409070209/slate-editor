import {KeyboardEvent} from 'react'
import {Editor, Transforms, Element} from 'slate'
import {ReactEditor} from 'slate-react'


enum AUXILIARY_ENUM {
    ALT_KEY = 'altKey',
    SHIFT_KEY = 'shiftKey',
    CTRL_KEY = 'ctrlKey',
    META_KEY= 'metaKey'
}
enum KEY_ENUM {
    ENTER = 'Enter',
    DEL = 'Backspace'
}

const initKeyMap = new Map<any, Function>()

initKeyMap.set(AUXILIARY_ENUM.SHIFT_KEY + KEY_ENUM.ENTER, (editor: ReactEditor) => {
    Transforms.unwrapNodes(editor, {
        match: n => {
            return !Editor.isEditor(n) && Element.isElement(n) && Object.prototype.hasOwnProperty.call(n,'type')
        },
        split: true
    })
    Transforms.unsetNodes(editor, 'type')
})

const keyDownHandle = (event: KeyboardEvent, editor: ReactEditor) => {
    const assistKeys = [AUXILIARY_ENUM.CTRL_KEY, AUXILIARY_ENUM.SHIFT_KEY, AUXILIARY_ENUM.META_KEY, AUXILIARY_ENUM.ALT_KEY]
    const keys = assistKeys.reduce((sum, key) => {
        return sum + (event[key] ? key : '')
    }, '')
    if (initKeyMap.has(keys + event.key)) {
        event.preventDefault();
        const fn = initKeyMap.get(keys + event.key)
        fn && fn(editor)
    }
}
export default keyDownHandle
