import React from 'react'
import {ReactEditor, RenderLeafProps, useSlateStatic} from 'slate-react'
import {Button, Tooltip} from 'antd'
import {DeleteOutlined, ShareAltOutlined} from '@ant-design/icons'
import {BaseSelection, Editor, Text, Range, Node, Transforms} from 'slate'
import {getMark} from '../../Util'
import {MARK_TYPE_ENUM} from '../../enum'
// TODO 渲染应该以text为准
export default function Href(props: RenderLeafProps): JSX.Element {
    let {children, leaf, attributes} = props
    let {
        link
    } = leaf
    const editor = useSlateStatic() as ReactEditor
    const removeLinkMark = (selection: BaseSelection) => {
        if (selection) {
            const nodeEntry = Editor.nodes(editor, {
                at: selection
            })
            for (const entry of nodeEntry) {
                const [node, at] = entry
                if (Text.isText(node) && getMark(node, MARK_TYPE_ENUM.link)){
                    console.log(node)
                    Transforms.setSelection(editor, {
                        anchor: {
                            offset: 0,
                            path: at,
                        },
                        focus: {
                            offset: node.text.length,
                            path: at,
                        }
                    })
                    Editor.removeMark(editor, MARK_TYPE_ENUM.link)
                }
            }
        }
    }
    const Edit = <>
        <Button type={'text'} onClick={() => window.open(link)}><ShareAltOutlined />访问</Button>
        <Button type={'text'} onMouseDown={() => removeLinkMark(editor.selection)}><DeleteOutlined />取消链接</Button>
    </>

    return <span {...attributes}>
        <Tooltip title={Edit} placement={'bottom'} color={'white'} trigger={'click'}>
            <a href={link}>{children}</a>
        </Tooltip>
    </span>
}
