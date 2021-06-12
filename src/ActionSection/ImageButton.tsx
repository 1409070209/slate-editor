/* eslint-disable */
import React, {ReactNode, useState} from 'react'
import {Button, Input, message, Modal} from 'antd'
import {PARAGRAPH_TYPE_ENUM} from '../enum'
import {useSlateStatic} from 'slate-react'
import {insertImage, isUrl} from '../Util'
import {Selection, Transforms} from 'slate'

interface IImageButtonProps {
    type: PARAGRAPH_TYPE_ENUM,
    icon?: ReactNode
}

export default function ImageButton(props: IImageButtonProps): JSX.Element {
    const {
        type, icon
    } = props
    const editor = useSlateStatic()
    const [url, setUrl] = useState('')
    const [visible, setVisible] = useState(false)
    const [selection, setSelection] = useState<Selection>(null)
    const mouseDownHandle = (event: React.MouseEvent) => {
        event.preventDefault()
        setVisible(true)
        //缓存selection
        setSelection(editor.selection)
    }
    const onOk = () => {
        if (!isUrl(url)) {
            return message.error('请输入正确的图片URL')
        }
        insertImage(editor, url, selection || editor.selection)
        setVisible(false)
        setUrl('')
    }
    return <>
        <Modal title={'请输入图片url'} visible={visible} onOk={onOk} onCancel={() => setVisible(false)} getContainer={false}>
            <Input placeholder={'请输入图片url'} onChange={e => {
                setUrl(e.target.value)}
            } value={url}/>
        </Modal>
        <Button icon={icon} onMouseDown={mouseDownHandle} type={'text'}>{type}</Button>
    </>
}
