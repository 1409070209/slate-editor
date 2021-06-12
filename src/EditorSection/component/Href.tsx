import React from 'react'
import {ReactEditor, RenderElementProps, RenderLeafProps, useSlate, useSlateStatic} from 'slate-react'
import {IHrefProps} from '../../@types/slate.js'
import {PARAGRAPH_TYPE_ENUM} from '../../enum'
import {Button, Tooltip} from 'antd'
import {DeleteOutlined, EditOutlined, ShareAltOutlined} from '@ant-design/icons'
import {unwrapLink} from '../../Util'
// TODO 渲染应该以text为准
export default function Href (props: RenderElementProps): JSX.Element {
    let { children, element } = props
    let {
        url, css
    } = element
    const style = css ? css.reduce((style, css) => Object.assign(style, css), {}) : {}
    const editor = useSlateStatic() as ReactEditor
    const Edit = <>
        <Button type={'text'} onClick={() => window.open(url)}><ShareAltOutlined />访问</Button>
        <Button type={'text'} onClick={() => unwrapLink(editor)}><DeleteOutlined />取消链接</Button>
    </>

    return <span>
        <Tooltip title={Edit} placement={'bottom'} color={'white'} trigger={'click'}>
            <a href={url} style={style}>{children}</a>
        </Tooltip>
    </span>
}
