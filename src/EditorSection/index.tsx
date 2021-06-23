import React, {useCallback, useMemo} from 'react'
import {Editable, ReactEditor, RenderElementProps, RenderLeafProps, Slate, withReact} from 'slate-react'
import {createEditor, Descendant} from 'slate'
import Leaf from './Leaf'
import {MARK_TYPE_ENUM, PARAGRAPH_TYPE_ENUM} from '../enum'
import {
    BgColorsOutlined,
    BoldOutlined, CameraOutlined,
    FontColorsOutlined,
    ItalicOutlined,
    OrderedListOutlined,
    UnderlineOutlined, UnorderedListOutlined
} from '@ant-design/icons'
import BlockButton from '../ActionSection/BlockButton'
import {withHistory} from 'slate-history'
import withHref from '../Plugin/WithHref'
import ImageButton from '../ActionSection/ImageButton'
import StyleButton from '../ActionSection/StyleButton'
import {ImageBlock} from './component/Image'
import ColorButton from '../ActionSection/ColorButton'
import keyDownHandle from '../KeyEvent'

const plugins = [
    withReact,
    withHistory,
    withHref
]

export default function EditorSection (props: {nodes: Descendant[], setNodeList:(value: Descendant[]) => void}) {
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
        if (element[PARAGRAPH_TYPE_ENUM.orderList]) {
            children = <ol {...attributes}>{children}</ol>
        } else if (element[PARAGRAPH_TYPE_ENUM.unOrderList]) {
            children = <ul {...attributes}>{children}</ul>
        } else if (element[PARAGRAPH_TYPE_ENUM.listItem]) {
            children = <li {...attributes}>{children}</li>
        } else if (element[PARAGRAPH_TYPE_ENUM.image]) {
            children = <ImageBlock {...props} children={props.children}/>
        } else {
            children = <p {...attributes}>{children}</p>
        }
        return children
    }
    const renderLeaf = useCallback((props:RenderLeafProps) => {
        return <Leaf {...props} children={props.children}/>
    }, [])

    return <div className={'slate-editor'}>
        <Slate value={nodes} editor={editor} onChange={setNodeList}>
            <StyleButton icon={<BoldOutlined />} type={MARK_TYPE_ENUM.bold} value={{fontWeight: 'bold'}}/>
            <StyleButton icon={<ItalicOutlined />} type={MARK_TYPE_ENUM.italic} value={{fontStyle: 'oblique'}}/>
            <StyleButton icon={<UnderlineOutlined />} type={MARK_TYPE_ENUM.underline} value={{textDecoration: 'underline'}}/>
            <ColorButton type={MARK_TYPE_ENUM.color} icon={<FontColorsOutlined />} />
            <ColorButton type={MARK_TYPE_ENUM.background} icon={<BgColorsOutlined />} />
            <BlockButton icon={<OrderedListOutlined />} type={PARAGRAPH_TYPE_ENUM.orderList} value={[]} />
            <BlockButton icon={<UnorderedListOutlined />} type={PARAGRAPH_TYPE_ENUM.unOrderList} value={[]} />
            <ImageButton icon={<CameraOutlined />} type={PARAGRAPH_TYPE_ENUM.image} />
            <hr/>
            <Editable
                renderElement={render}
                renderLeaf={renderLeaf}
                onKeyDown={event => keyDownHandle(event, editor)}
                placeholder="rich demo"
                spellCheck
                autoFocus
            />
        </Slate>
    </div>
}
