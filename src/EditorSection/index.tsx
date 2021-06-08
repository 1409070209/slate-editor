import React, {useCallback, useMemo} from 'react'
import {Editable, ReactEditor, RenderElementProps, RenderLeafProps, Slate, withReact} from 'slate-react'
import {createEditor, Descendant} from 'slate'
import Title from './component/Title/index'
import Leaf from './component/Leaf/Leaf'
import keyDownHandle from '../KeyEvent'
import StyleButton from '../ActionSection/StyleButton'
import {MARK_TYPE_ENUM} from '../enum'

export default function EditorSection (props: {nodes: Descendant[], setNodeList:(value: Descendant[]) => void}) {
    const {
        nodes, setNodeList
    } = props
    const editor = useMemo(() => {
        return withReact(createEditor() as ReactEditor)
    }, [])

    const render = (props: RenderElementProps):JSX.Element => {
        switch (props.element.type) {
            case 'title': {
                return <Title {...props} children={props.children}/>
            }
            default: {
                return <div {...props.attributes}>{props.children}</div>
            }
        }
    }
    const renderLeaf = useCallback((props:RenderLeafProps) => {
        return <Leaf {...props} children={props.children}/>
    }, [])
    return <div className={'slate-editor'}>
        <Slate value={nodes} editor={editor} onChange={setNodeList}>
            <StyleButton type={MARK_TYPE_ENUM.bold} value={{fontWeight: 'bold'}}/>
            <StyleButton type={MARK_TYPE_ENUM.italic} value={{textDecoration: 'underline'}}/>
            <StyleButton type={MARK_TYPE_ENUM.color} value={{color: 'green'}}/>
            <StyleButton type={MARK_TYPE_ENUM.background} value={{background: 'red'}}/>
            <hr/>
            <br/><br/>
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
