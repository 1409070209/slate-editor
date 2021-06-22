import React from 'react'
import {RenderElementProps, useFocused, useSelected} from 'slate-react'
import {PARAGRAPH_TYPE_ENUM} from '../../enum'

export function ImageBlock (props: RenderElementProps): JSX.Element {
    let {
        element, attributes, children
    } = props
    const selected = useSelected()
    const focused = useFocused()
    const val = element[PARAGRAPH_TYPE_ENUM.image]
    return <span {...attributes}>
        <span contentEditable={'false'} suppressContentEditableWarning={true}>
            <img src={val && val.url} alt="图片" style={{
                maxWidth: '100%', maxHeight: '20em', boxShadow: `${selected && focused ? '0 0 0 3px #B4D5FF' : 'none'}`
            }}/>
        </span>
        {children}
    </span>
}
