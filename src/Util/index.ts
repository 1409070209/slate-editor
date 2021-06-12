import {BaseEditor, Editor, Element, Range, Selection, Transforms} from 'slate'
import {PARAGRAPH_TYPE_ENUM} from '../enum'
import {message} from 'antd'
import {ReactEditor} from 'slate-react'

export const isUrl = (path: string) => {
    path = path.trim()
    const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%\/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
    return reg.test(path);
}
export const isLinkActive = (editor: ReactEditor) => {
    const [link] = Editor.nodes(editor, {
        match: n =>
            !Editor.isEditor(n) && Element.isElement(n) && n.type === PARAGRAPH_TYPE_ENUM.link,
    })
    return !!link
}

export const unwrapLink = (editor: ReactEditor) => {
    Transforms.unwrapNodes(editor, {
        match: n =>
            !Editor.isEditor(n) && Element.isElement(n) && n.type === PARAGRAPH_TYPE_ENUM.link,
    })
}
// 将选中的结点包裹成Href
export const wrapLink = (editor: ReactEditor, url: string) => {
    if (isLinkActive(editor)) {
        unwrapLink(editor)
    }

    const { selection } = editor
    const isCollapsed = selection && Range.isCollapsed(selection)
    const link = {
        type: 'link',
        url,
        children: isCollapsed ? [{ text: url }] : [],
    }

    if (isCollapsed) {
        Transforms.insertNodes(editor, link)
    } else {
        Transforms.wrapNodes(editor, link, { split: true })
        Transforms.collapse(editor, { edge: 'end' })
        // 插入一个空格规避光标BUG
    }
}

export const insertHref = (editor: ReactEditor, url: string) => {
    if (editor.selection) {
        wrapLink(editor, url)
    }
}
export const insertImage = (editor: BaseEditor, url: string, selection?: Selection) => {
    if (!isUrl(url)) {
        message.error('请输入正确的图片URL')
        return
    }
    // 如果指定了位置就在特定位置插入
    Transforms.insertNodes(editor, {
        type: PARAGRAPH_TYPE_ENUM.image, url, children: [{text: url}]
    }, {
        at: selection || editor.selection || Editor.end(editor, [])
    })

}
