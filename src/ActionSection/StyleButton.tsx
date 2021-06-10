import React, {CSSProperties} from 'react'
import {useSlate} from 'slate-react'
import {BaseEditor, Editor} from 'slate'
import {Button} from 'antd'
import {MARK_TYPE_ENUM} from '../enum'

interface IStyleButtonProps {
    type: MARK_TYPE_ENUM,
    value: CSSProperties,
    icon?: React.ReactNode
}

const isMarkActive = (editor: BaseEditor, type: MARK_TYPE_ENUM) => {
    if (!editor.selection) return false
    const masks = Editor.marks(editor)
    return masks ? masks[type] : false
}
const switchMark = (editor: BaseEditor, type: MARK_TYPE_ENUM, value: CSSProperties) => {
    const isType = isMarkActive(editor, type)
    if (isType) {
        Editor.removeMark(editor, type)
    } else {
        Editor.addMark(editor, type, value)
    }
}
export default function StyleButton(props: IStyleButtonProps): JSX.Element {
    const {
        type, value, icon
    } = props
    const editor = useSlate()

    const clickHandle = () => {
        switchMark(editor, type, value)
    }
    return <Button icon={icon} onMouseDown={clickHandle} type={isMarkActive(editor, type) ? 'primary' : 'text'}>
        {type}
    </Button>
}

