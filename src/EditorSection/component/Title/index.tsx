import React from "react";
import {RenderElementProps} from "slate-react";

export default function Title(props: RenderElementProps): JSX.Element {

    return <h1 {...props.attributes}>
        {props.children ? props.children : null}
    </h1>;
}
