import React from 'react'
import { RenderElementProps } from 'slate-react'

import { PARAGRAPH_TYPE_ENUM } from '../../enum'
import { hasType } from '../../Util'


export default function CodeHighLight(props: RenderElementProps): JSX.Element {
    let {
        element, attributes, children
    } = props
    if (!hasType(element, PARAGRAPH_TYPE_ENUM.code)) {
        console.error('代码高亮组件没有code属性')
    }

    return (
        <pre{...attributes} contentEditable={'false'} suppressContentEditableWarning={true}>
            {children}
        </pre>
    )

}
