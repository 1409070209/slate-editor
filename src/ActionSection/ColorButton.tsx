import {DownOutlined} from '@ant-design/icons'
import {Button, Dropdown} from 'antd'
import React, {CSSProperties, useEffect, useState} from 'react'
import {Editor} from 'slate'
import {useSlate} from 'slate-react'
import {MARK_TYPE_ENUM} from '../enum'
import {switchMark} from '../Util'
import ColorPicker from './component/ColorPicker'
interface IColorButtonProps {
    type: MARK_TYPE_ENUM.color | MARK_TYPE_ENUM.background,
    icon?: React.ReactNode
}
export default function ColorButton(props: IColorButtonProps): JSX.Element {
    const {
        type, icon
    } = props
    const editor = useSlate()
    const [style, setStyle] = useState<CSSProperties | undefined>(undefined)

    useEffect(() => {
        if (editor.selection) {
            const masks = Editor.marks(editor)
            if (masks && masks[type]) {
                setStyle(masks[type])
            } else {
                setStyle(undefined)
            }
        }
    }, [editor, editor.selection, type])

    const colorPickChangeHandle = (color: string, e: React.MouseEvent) => {
        if (editor.selection) {
            switchMark(editor, type, {
                [type]: color
            })
        }
    }

    return <Dropdown.Button
        overlay={<ColorPicker onColorChange={colorPickChangeHandle} />}
        icon={<DownOutlined />}
        placement={'bottomRight'}
        buttonsRender={() => [
            <Button icon={icon} type={'text'} onMouseDown={() => switchMark(editor, type)} style={{
                borderBottom: style ? `2px solid ${style[type]}` : ''
            }}>
                {type}
            </Button>,
            <Button type={'text'} icon={<DownOutlined />} />
        ]}
    />
}
