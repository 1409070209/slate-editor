import React, {useCallback, useMemo, useState} from 'react';
import {Editable, ReactEditor, RenderLeafProps, Slate, withReact} from 'slate-react';
import {RenderElementProps} from "slate-react";
import {createEditor, Descendant} from "slate";
// @ts-ignore
import Title from './component/Title/index.tsx';
import Leaf from "./component/Leaf/Leaf";
import Blob from "../ActionSection/Blob";

export default function EditorSection () {
    const editor = useMemo<ReactEditor>(() => {
        return withReact(createEditor() as ReactEditor)
    }, [])
    const [nodes, setNodeList] = useState<Descendant[]>([
        {
            type: 'title',
            params: [1],
            children: [
                { text: 'A line of text in a paragraph.' },
                { text: '123'}
            ],
        }
    ])
    const keyDownHandle:any = (event:KeyboardEvent) => {

    }
    const render = (props: RenderElementProps):JSX.Element => {
        switch (props.element.type) {
            case 'title': {
                return <Title {...props}/>
            }
            default: {
                return <div {...props.attributes}>{props.children}</div>
            }
        }
    }
    console.log(nodes)
    const renderLeaf = useCallback((props:RenderLeafProps) => {
        return <Leaf {...props}/>
    }, [])

    return <>
        <Slate value={nodes} editor={editor} onChange={val => {
            setNodeList(val)
        }}>
            <Blob editor={editor} nodes={nodes} setNodes={setNodeList}/>
            <br/><br/>
            <Editable
                renderElement={render}
                renderLeaf={renderLeaf}
                onKeyDown={keyDownHandle}
            />
        </Slate>
    </>
}
