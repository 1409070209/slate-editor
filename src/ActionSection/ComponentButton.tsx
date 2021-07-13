import { Button } from 'antd'
import React from 'react'
import { Transforms } from 'slate'
import { useSlate } from 'slate-react'

import { PARAGRAPH_TYPE_ENUM } from '../enum'

export interface IComponentProps {
    type: PARAGRAPH_TYPE_ENUM,
    value: object,
    icon?: React.ReactNode
}

export default function ComponentButton(props: IComponentProps): JSX.Element {
    const {
        type, icon, value
    } = props
    const editor = useSlate()
    const clickHandle = (e: React.MouseEvent) => {
        if (editor.selection) {
            Transforms.insertNodes(editor, [{
                [type]: value, children: [ { text: '' }]
            }])
        }
    }
    return <Button icon={icon} onMouseDown={clickHandle} type={'text'}>
        {type}
    </Button>
}
