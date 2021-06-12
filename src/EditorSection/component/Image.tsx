import React from 'react'
import {RenderElementProps, useFocused, useSelected} from 'slate-react'

export function ImageBlock (props: RenderElementProps): JSX.Element {
    let {
        element, attributes, children
    } = props
    const selected = useSelected()
    const focused = useFocused()
    return <span {...attributes}>
        <span contentEditable={'false'} suppressContentEditableWarning={true}>
            <img src={element.url} alt="图片" style={{
                maxWidth: '100%', maxHeight: '20em', boxShadow: `${selected && focused ? '0 0 0 3px #B4D5FF' : 'none'}`
            }}/>
        </span>
        {children}
    </span>
}
