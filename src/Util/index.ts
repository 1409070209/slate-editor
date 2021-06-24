import { message } from 'antd'
import { CSSProperties } from 'react'
import { BaseEditor, BaseElement, BaseText, Editor, Selection, Transforms } from 'slate'
import { ReactEditor } from 'slate-react'

import { MARK_TYPE_ENUM, PARAGRAPH_TYPE_ENUM } from '../enum'

export const isUrl = (path: string) => {
    path = path.trim()
    const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%\/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
    return reg.test(path);
}

export const isMarkActive = (editor: BaseEditor, type: MARK_TYPE_ENUM) => {
    if (!editor.selection) return false
    const masks = Editor.marks(editor)
    return masks ? masks[type] : false
}

export const switchMark = (editor: BaseEditor, type: MARK_TYPE_ENUM, value?: CSSProperties) => {
    const isType = isMarkActive(editor, type)
    if (isType) {
        Editor.removeMark(editor, type)
    } else {
        Editor.addMark(editor, type, value)
    }
}

export const insertHref = (editor: ReactEditor, url: string) => {
    Transforms.insertNodes(editor, [
        { link: { url, text: url }, children: [ { text: '' } ] },
    ])
}

export const insertImage = (editor: BaseEditor, url: string, selection?: Selection) => {
    if (!isUrl(url)) {
        message.error('请输入正确的图片URL')
        return
    }
    // 如果指定了位置就在特定位置插入
    Transforms.insertNodes(editor, [
        {
            [PARAGRAPH_TYPE_ENUM.image]: {
                url,
            },
            children: [{ text: url }]
        },
    ], {
        at: selection || editor.selection || Editor.end(editor, [])
    })
}

export const getMark = (element: BaseText, type: MARK_TYPE_ENUM) => {
    return Object.prototype.hasOwnProperty.call(element, type)
}

export const hasType = (element: BaseElement, type: string | string[]) => {
    if (type instanceof Array) {
        return type.some(item => Object.prototype.hasOwnProperty.call(element, item))
    } else {
       return Object.prototype.hasOwnProperty.call(element, type)
    }
}

