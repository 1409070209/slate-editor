import {Button} from 'antd'
import React from 'react'
import {BaseEditor, BaseElement, Editor, Element, Transforms} from 'slate'
import {useSlate} from 'slate-react'
import {PARAGRAPH_TYPE_ENUM} from '../enum'
import {hasType} from '../Util'
import {hasListType, paragraphChildrenType} from '../Util/paragraph'


export interface IComponentButtonProps {
    type: PARAGRAPH_TYPE_ENUM,
    value: object[],
    icon?: React.ReactNode
}

const isBlockActive = (editor: BaseEditor, type: PARAGRAPH_TYPE_ENUM) => {
    let nodes = Editor.nodes(editor, {
        match: n => {
            return !Editor.isEditor(n) && Element.isElement(n) && hasType(n, type)
        }
    })
    for (const nodeElement of nodes) {
        const node = nodeElement[0]
        if (Element.isElement(node)) {
            return hasType(node, type)
        }
    }
    return false
}


const switchBlockType = (editor: BaseEditor, type: PARAGRAPH_TYPE_ENUM, value: object = {}) => {
    const isType = isBlockActive(editor, type)
    const hasChild = paragraphChildrenType.has(type)
    // 如果是列表组件，就把属性解除
    Transforms.unwrapNodes(editor, {
        split: true,
        match: node => {
            return !Editor.isEditor(node)
                && Element.isElement(node)
                && hasListType(node)
        }
    })
    if (isType) {
        Transforms.unsetNodes(editor, paragraphChildrenType.get(type) as PARAGRAPH_TYPE_ENUM)
    } else {
        if (hasChild) {
            Transforms.setNodes(editor, {
                // hasChild属性确保了get函数的返回值
                [paragraphChildrenType.get(type) as string] : value
            })
        } else {
            Transforms.setNodes(editor, {
                [type]: value
            })
        }
    }
    if (!isType && hasChild) {
        Transforms.wrapNodes(editor, {
            [type]: value, children: []
        })
    }

}
export default function BlockButton(props: IComponentButtonProps): JSX.Element {
    const {
        type, value, icon
    } = props
    const editor = useSlate()

    const mouseDownHandle = () => {
        if (!editor.selection) return
        switchBlockType(editor, type, value)
    }
    return <>
        <Button
            icon={icon}
            onMouseDown={mouseDownHandle}
            type={isBlockActive(editor, type) ? 'primary' : 'text'}
        >
            {type}
        </Button>
    </>
}
