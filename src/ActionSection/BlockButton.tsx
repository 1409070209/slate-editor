import React from 'react'
import {useSlate} from 'slate-react'
import {Button} from 'antd'
import {PARAGRAPH_TYPE_ENUM} from '../enum'
import {BaseEditor, BaseElement, Editor, Element, Transforms} from 'slate'


export interface IComponentButtonProps {
    type: PARAGRAPH_TYPE_ENUM,
    value: object[],
    icon?: React.ReactNode
}

const isBlockActive = (editor: BaseEditor, type: PARAGRAPH_TYPE_ENUM) => {
    let nodes = Editor.nodes(editor, {
        match: n => {
            return !Editor.isEditor(n) && Element.isElement(n) && n.type === type
        }
    })
    for (const nodeElement of nodes) {
        if ((nodeElement[0] as BaseElement).type === type) return true
    }
    return false
}
const paragraphChildrenType = new Map()
paragraphChildrenType.set(PARAGRAPH_TYPE_ENUM.orderList, PARAGRAPH_TYPE_ENUM.listItem)
paragraphChildrenType.set(PARAGRAPH_TYPE_ENUM.unOrderList, PARAGRAPH_TYPE_ENUM.listItem)

const switchBlockType = (editor: BaseEditor, type: PARAGRAPH_TYPE_ENUM, value: object[]) => {
    const isType = isBlockActive(editor, type)
    const hasChild = paragraphChildrenType.has(type)
    // 如果是段落组件，就把属性解除
    Transforms.unwrapNodes(editor, {
        split: true,
        match: node => {
            return !Editor.isEditor(node)
                && Element.isElement(node)
                && paragraphChildrenType.has(node.type)
        }
    })
    if (isType) {
        Transforms.unsetNodes(editor, 'type')
    } else {
        Transforms.setNodes(editor, {
            type: hasChild ? paragraphChildrenType.get(type): type
        })
    }
    if (!isType && hasChild) {
        Transforms.wrapNodes(editor, {
            type, children: []
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
