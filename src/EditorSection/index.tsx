import React, {useCallback, useMemo} from 'react'
import {Editable, ReactEditor, RenderElementProps, RenderLeafProps, Slate, withReact} from 'slate-react'
import {createEditor, Descendant} from 'slate'
import Leaf from './component/Leaf'
import keyDownHandle from '../KeyEvent'
import StyleButton from '../ActionSection/StyleButton'
import {MARK_TYPE_ENUM, PARAGRAPH_TYPE_ENUM} from '../enum'
import {
    BgColorsOutlined,
    BoldOutlined,
    FontColorsOutlined,
    ItalicOutlined,
    OrderedListOutlined,
    UnderlineOutlined, UnorderedListOutlined
} from '@ant-design/icons'
import ComponentButton from '../ActionSection/ComponentButton'
import {withHistory} from 'slate-history'

export default function EditorSection (props: {nodes: Descendant[], setNodeList:(value: Descendant[]) => void}) {
    const {
        nodes, setNodeList
    } = props
    const editor = useMemo(() => {
        return withHistory(withReact(createEditor() as ReactEditor))
    }, [])

    const render = (props: RenderElementProps):JSX.Element => {
        switch (props.element.type) {
            case PARAGRAPH_TYPE_ENUM.orderList: {
                return <ol {...props.attributes}>{props.children}</ol>
            }
            case PARAGRAPH_TYPE_ENUM.unOrderList: {
                return <ul {...props.attributes}>{props.children}</ul>
            }
            case PARAGRAPH_TYPE_ENUM.listItem: {
                return <li {...props.attributes}>{props.children}</li>
            }
            default: {
                return <p {...props.attributes}>{props.children}</p>
            }
        }
    }
    const renderLeaf = useCallback((props:RenderLeafProps) => {
        return <Leaf {...props} children={props.children}/>
    }, [])

    return <div className={'slate-editor'}>
        <Slate value={nodes} editor={editor} onChange={setNodeList}>
            <StyleButton icon={<BoldOutlined />} type={MARK_TYPE_ENUM.bold} value={{fontWeight: 'bold'}}/>
            <StyleButton icon={<ItalicOutlined />} type={MARK_TYPE_ENUM.italic} value={{fontStyle: 'oblique'}}/>
            <StyleButton icon={<UnderlineOutlined />} type={MARK_TYPE_ENUM.underline} value={{textDecoration: 'underline'}}/>
            <StyleButton icon={<FontColorsOutlined />} type={MARK_TYPE_ENUM.color} value={{color: 'green'}}/>
            <StyleButton icon={<BgColorsOutlined />} type={MARK_TYPE_ENUM.background} value={{background: 'red'}}/>
            <ComponentButton icon={<OrderedListOutlined />} type={PARAGRAPH_TYPE_ENUM.orderList} value={[]} />
            <ComponentButton icon={<UnorderedListOutlined />} type={PARAGRAPH_TYPE_ENUM.unOrderList} value={[]} />
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
