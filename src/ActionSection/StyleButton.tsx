import {Button} from 'antd'
import React, {CSSProperties} from 'react'
import {BaseEditor, Editor} from 'slate'
import {useSlate} from 'slate-react'
import {MARK_TYPE_ENUM} from '../enum'
import {isMarkActive, switchMark} from '../Util'

interface IStyleButtonProps {
    type: MARK_TYPE_ENUM,
    value: CSSProperties,
    icon?: React.ReactNode
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

