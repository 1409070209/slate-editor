import React from "react";
import {RenderLeafProps} from "slate-react";

export default function Leaf(props: RenderLeafProps): JSX.Element {
    let { attributes, children, leaf } = props
    if (leaf.bold) {
        children = <strong>{children}</strong>
    }
    if (leaf.code) {
        children = <code>{children}</code>
    }
    if (leaf.italic) {
        children = <em>{children}</em>
    }
    if (leaf.underline) {
        children = <u>{children}</u>
    }

    return <span {...attributes}>{children}</span>
}

