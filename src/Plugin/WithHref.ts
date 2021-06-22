import {ReactEditor} from 'slate-react'
import {PARAGRAPH_TYPE_ENUM} from '../enum'
import {hasType, insertHref, isUrl} from '../Util'
import {Element, Text, Transforms} from 'slate'

const withHref = (editor: ReactEditor) => {
    const { insertData, isVoid, normalizeNode, apply } = editor
    editor.isVoid = element => {
        return hasType(element, PARAGRAPH_TYPE_ENUM.image) ? true : isVoid(element)
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
        // console.log(editor.selection, operation)
        apply(operation)
        // console.log(editor.selection)
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
