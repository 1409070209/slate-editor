import { KeyboardEvent } from 'react'
import { ReactEditor } from 'slate-react'


enum AUXILIARY_ENUM {
    ALT_KEY = 'altKey',
    SHIFT_KEY = 'shiftKey',
    CTRL_KEY = 'ctrlKey',
    META_KEY= 'metaKey'
}

const initKeyMap = new Map<any, (editor: ReactEditor, event: KeyboardEvent) => boolean>()
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
