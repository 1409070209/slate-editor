import React, {CSSProperties} from 'react'
import {RenderLeafProps} from "slate-react";
import {MARK_TYPE_ENUM} from '../../../enum'

export default function Leaf(props: RenderLeafProps): JSX.Element {
    let { attributes, children, leaf } = props
    let cssProperties: CSSProperties = {}
    if (!children) children = <></>
    for (const markTypeEnumKey in MARK_TYPE_ENUM) {
        if (leaf.hasOwnProperty(markTypeEnumKey)) {
            if (leaf[markTypeEnumKey]) {
                cssProperties = Object.assign(cssProperties, leaf[markTypeEnumKey])
            }
        }
    }
    return <span {...attributes} style={cssProperties}>{children}</span>
}

