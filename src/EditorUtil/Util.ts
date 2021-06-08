import {ReactEditor} from 'slate-react'
import {Range} from 'slate'

export const getRangeStart = (editor: ReactEditor) => {
    if (!editor.selection) return null
    const {
        anchor, focus
    } = editor.selection
    const [anchorX, anchorY] = anchor.path
    const [focusX, focusY] = focus.path
}
export const nextLine = (editor: ReactEditor): Range | null => {
    if (!editor.selection) return null
    return {
        anchor: {
            path: [editor.selection.anchor.path[0] + 1, editor.selection.anchor.path[1]],
            offset: 0
        },
        focus: {
            path: [editor.selection.focus.path[0] + 1, editor.selection.focus.path[1]],
            offset: 0
        }
    }
}
