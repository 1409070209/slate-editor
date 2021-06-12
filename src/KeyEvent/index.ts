import {KeyboardEvent} from 'react'
import {Editor, Transforms, Element} from 'slate'
import {ReactEditor} from 'slate-react'
import {PARAGRAPH_TYPE_ENUM} from '../enum'


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

const initKeyMap = new Map<any, (editor: ReactEditor, event: KeyboardEvent) => boolean>()

initKeyMap.set(KEY_ENUM.ENTER, (editor: ReactEditor, event: KeyboardEvent) => {
    const [node] = Editor.nodes(editor, {
        match: node => {
            return !Editor.isEditor(node) && Element.isElement(node) && node.type === PARAGRAPH_TYPE_ENUM.link
        }
    })
    if (node) {
        Transforms.insertNodes(editor, {children: [{text: ''}]})
        event.preventDefault()
    }
    return false;

})

const keyDownHandle = (event: KeyboardEvent, editor: ReactEditor) => {
    const assistKeys = [AUXILIARY_ENUM.CTRL_KEY, AUXILIARY_ENUM.SHIFT_KEY, AUXILIARY_ENUM.META_KEY, AUXILIARY_ENUM.ALT_KEY]
    const keys = assistKeys.reduce((sum, key) => {
        return sum + (event[key] ? key : '')
    }, '')
    if (initKeyMap.has(keys + event.key)) {
        const fn = initKeyMap.get(keys + event.key)
        const flag = fn && fn(editor, event)
        if (flag) event.preventDefault()
    }
}
export default keyDownHandle
