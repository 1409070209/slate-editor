import {Editor, Element, Location, Text, Transforms} from 'slate'
import {ReactEditor} from 'slate-react'
import {PARAGRAPH_TYPE_ENUM} from '../enum'
import {hasType, insertHref, isUrl} from '../Util'

const withHref = (editor: ReactEditor) => {
    const {insertData, isVoid, normalizeNode, isInline, apply} = editor
    editor.isVoid = element => {
        return hasType(element, [
            PARAGRAPH_TYPE_ENUM.image,
            PARAGRAPH_TYPE_ENUM.link,
        ]) ? true : isVoid(element)
    }
    editor.isInline = element => {
        return hasType(element, [
            PARAGRAPH_TYPE_ENUM.link,
        ]) ? true : isInline(element)
    }
    editor.insertData = data => {
        const text = data.getData('text/plain')
        if (isUrl(text)) {
            insertHref(editor, text)
        } else {
            insertData(data)
        }
    }
    editor.apply = operation => {
        apply(operation)
    }

    editor.normalizeNode = entry => {
        const [node, path] = entry
        if (Element.isElement(node) && node.children.length > 1) {
            if (Text.isText(node.children[0]) && node.children[0].text.length === 0) {
                //对段落的第一个空节点移除所有的样式
                normalizeNode(entry)
                if (!editor.selection) return
                Transforms.setSelection(editor, {
                    anchor: {
                        offset: 0,
                        path: path.concat(0),
                    },
                    focus: {
                        offset: 0,
                        path: path.concat(0),
                    }
                })
                return
            }
        }
        normalizeNode(entry)
    }
    return editor
}
export default withHref
