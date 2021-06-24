import './index.less'

import {
    BgColorsOutlined,
    BoldOutlined, CameraOutlined,
    FontColorsOutlined,
    ItalicOutlined,
    OrderedListOutlined,
    UnderlineOutlined, UnorderedListOutlined
} from '@ant-design/icons'
import React, { useCallback, useMemo } from 'react'
import { createEditor } from 'slate'
import { withHistory } from 'slate-history'
import { Editable, ReactEditor, RenderElementProps, RenderLeafProps, Slate, withReact } from 'slate-react'

import BlockButton from '../ActionSection/BlockButton'
import ColorButton from '../ActionSection/ColorButton'
import ImageButton from '../ActionSection/ImageButton'
import StyleButton from '../ActionSection/StyleButton'
import { MARK_TYPE_ENUM, PARAGRAPH_TYPE_ENUM, PARAGRAPH_TYPE_LIST } from '../enum'
import keyDownHandle from '../KeyEvent'
import withHref from '../Plugin/WithHref'
import { hasType } from '../Util'
import Href from './component/Href'
import { ImageBlock } from './component/Image'
import Leaf from './Leaf'

const plugins = [
    withReact,
    withHistory,
    withHref
]

export default function EditorSection (props: any) {
    const {
        nodes, setNodeList
    } = props
    const editor = useMemo(() => {
        return plugins.reduce((editor, plugin) => {
            return plugin(editor)
        }, createEditor() as ReactEditor)
    }, [])

    const render = (props: RenderElementProps):JSX.Element => {
        let {
            element, attributes, children
        } = props
        // 为了支持嵌套，Void结点应该先于非Void节点挂载，以确保Image是ListItem的子元素
        if (element[PARAGRAPH_TYPE_ENUM.image]) {
            children = <ImageBlock {...props} children={props.children}/>
        }
        if (element[PARAGRAPH_TYPE_ENUM.link]) {
            children = <Href {...props} children={props.children} />
        }
        if (element[PARAGRAPH_TYPE_ENUM.orderList]) {
            children = <ol {...attributes}>{children}</ol>
        }
        if (element[PARAGRAPH_TYPE_ENUM.unOrderList]) {
            children = <ul {...attributes}>{children}</ul>
        }
        if (element[PARAGRAPH_TYPE_ENUM.listItem]) {
            children = <li {...attributes}>{children}</li>
        }
        if (!hasType(element, PARAGRAPH_TYPE_LIST)){
            children = <p {...attributes}>{children}</p>
        }
        return children
    }
    const renderLeaf = useCallback((props:RenderLeafProps) => {
        return <Leaf {...props} children={props.children}/>
    }, [])

    return <div className={'slate-editor'}>
        <Slate value={nodes} editor={editor} onChange={setNodeList}>
            <StyleButton icon={<BoldOutlined />} type={MARK_TYPE_ENUM.bold} value={{ fontWeight: 'bold' }}/>
            <StyleButton icon={<ItalicOutlined />} type={MARK_TYPE_ENUM.italic} value={{ fontStyle: 'oblique' }}/>
            <StyleButton icon={<UnderlineOutlined />} type={MARK_TYPE_ENUM.underline} value={{ textDecoration: 'underline' }}/>
            <ColorButton type={MARK_TYPE_ENUM.color} icon={<FontColorsOutlined />} />
            <ColorButton type={MARK_TYPE_ENUM.background} icon={<BgColorsOutlined />} />
            <BlockButton icon={<OrderedListOutlined />} type={PARAGRAPH_TYPE_ENUM.orderList} value={[]} />
            <BlockButton icon={<UnorderedListOutlined />} type={PARAGRAPH_TYPE_ENUM.unOrderList} value={[]} />
            <ImageButton icon={<CameraOutlined />} type={PARAGRAPH_TYPE_ENUM.image} />
            <hr/>
            <Editable className={'slate-editor-context'}
                renderElement={render}
                renderLeaf={renderLeaf}
                onKeyDown={event => keyDownHandle(event, editor)}
                placeholder='rich demo'
                spellCheck
                autoFocus
            />
        </Slate>
    </div>
}
