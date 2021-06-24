import {DeleteOutlined, EditOutlined, ShareAltOutlined} from '@ant-design/icons'
import {Button, Form, Input, Modal, Tooltip} from 'antd'
import {useForm} from 'antd/es/form/Form.js'
import React, {useEffect, useState} from 'react'
import {BaseSelection, Editor, Selection, Transforms} from 'slate'
import {ReactEditor, RenderElementProps, RenderLeafProps, useSlate, useSlateStatic} from 'slate-react'
import {IHrefProps} from '../../@types/slate.js'
import {PARAGRAPH_TYPE_ENUM} from '../../enum'
import {hasType} from '../../Util'

let selection: Selection = null
// TODO 将antd的Tooltip重构成新的组件，支持mouseout自动隐藏
export default function Href(props: RenderElementProps): JSX.Element {
    let {children, element, attributes} = props
    let link = element[PARAGRAPH_TYPE_ENUM.link] as IHrefProps
    if (link === undefined) console.error(element, '没有link参数')
    const [visible, setVisible] = useState(false)
    const linkData = {
        url: link.url,
        text: link.text
    }
    const editor = useSlate() as ReactEditor

    const removeLinkMark = (selection: BaseSelection) => {
        if (selection) {
            const [node, at] = Editor.parent(editor, selection)
            if (!hasType(node, PARAGRAPH_TYPE_ENUM.link)) return
            Editor.withoutNormalizing(editor,() => {
                Transforms.unsetNodes(editor, PARAGRAPH_TYPE_ENUM.link, {at})
                Transforms.insertNodes(editor, {text: linkData.text}, {at})
            })
        }
    }

    const modalConfig = {
        visible,
        title: '编辑超链接',
        getContainer: () => document.body,
        destroyOnClose: true,
        onOk() {
            setVisible(false)
            const values = form.getFieldsValue()
            if (selection) {
                const [node, at] = Editor.parent(editor, selection)
                if (hasType(node, PARAGRAPH_TYPE_ENUM.link)) {
                    Editor.withoutNormalizing(editor, () => {
                        Transforms.delete(editor, {at: at})
                        Transforms.insertNodes(editor, [
                            {
                                [PARAGRAPH_TYPE_ENUM.link]: {url: values.url, text: values.text},
                                children: [ {text: ''} ]
                            }
                        ], {at: at})
                    })
                }
            }
        },
        onCancel() {
            setVisible(false)
        }
    }
    const [form] = useForm()

    const Edit = <div className={'link-tooltip'}>
        <Button type={'text'} onMouseDown={() => {
            selection = editor.selection
            setVisible(true)
        }}><EditOutlined />编辑</Button>
        <Button type={'text'} onClick={() => window.open(link.url)}><ShareAltOutlined />访问</Button>
        <Button type={'text'} onMouseDown={() => removeLinkMark(editor.selection)}><DeleteOutlined />取消链接</Button>
    </div>
    return <span {...attributes}>
        <Tooltip title={Edit} placement={'bottom'} color={'white'} trigger={'click'}>
            <span style={{color: '#096DD9'}}>{linkData.text}</span>
            <span>{children}</span>
        </Tooltip>
        <Modal {...modalConfig}>
            <Form form={form} initialValues={linkData}>
                <Form.Item label={'链接'} name={'url'}><Input placeholder={'输入链接'} /></Form.Item>
                <Form.Item label={'文本'} name={'text'}><Input placeholder={'输入文本'} /></Form.Item>
            </Form>
        </Modal>
    </span>
}
