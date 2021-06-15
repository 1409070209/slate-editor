import {ReactEditor} from 'slate-react'
import {PARAGRAPH_TYPE_ENUM} from '../enum'
import {insertHref, isUrl} from '../Util'

const withHref = (editor: ReactEditor) => {
    const { insertData, isVoid } = editor
    editor.isVoid = element => {
        return element.type === PARAGRAPH_TYPE_ENUM.image
            ? true : isVoid(element)
    }
    editor.insertData = data => {
        const text = data.getData('text/plain')
        if (isUrl(text)) {
            insertHref(editor, text)
        } else {
            insertData(data)
        }
    }
    return editor
}
export default withHref
