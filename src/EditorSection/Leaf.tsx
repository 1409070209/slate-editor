import React, { CSSProperties } from 'react'
import { RenderLeafProps } from 'slate-react'

import { MARK_TYPE_ENUM } from '../enum'

export default function Leaf(props: RenderLeafProps): JSX.Element {
    let { attributes, children, leaf } = props
    let cssProperties: CSSProperties = {}
    if (!children) children = <></>
    if (leaf[MARK_TYPE_ENUM.bold]) {
        cssProperties = Object.assign(cssProperties, leaf[MARK_TYPE_ENUM.bold])
    }
    if (leaf[MARK_TYPE_ENUM.italic]) {
        cssProperties = Object.assign(cssProperties, leaf[MARK_TYPE_ENUM.italic])
    }
    if (leaf[MARK_TYPE_ENUM.underline]) {
        cssProperties = Object.assign(cssProperties, leaf[MARK_TYPE_ENUM.underline])
    }
    if (leaf[MARK_TYPE_ENUM.color]) {
        cssProperties = Object.assign(cssProperties, leaf[MARK_TYPE_ENUM.color])
    }
    if (leaf[MARK_TYPE_ENUM.background]) {
        cssProperties = Object.assign(cssProperties, leaf[MARK_TYPE_ENUM.background])
    }

    return <span {...attributes} style={cssProperties}>{children}</span>
}

