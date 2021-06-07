import React, {useCallback} from 'react'
import {Button} from "antd";
import {ReactEditor} from 'slate-react'
import {Descendant} from 'slate'

interface IButtonProps {
    editor: ReactEditor;
    nodes: Descendant[];
    setNodes: (val: Descendant[]) => void
}
export default function Blob(props: IButtonProps): JSX.Element {
    const clickHandle = useCallback(() => {
        console.log(props.editor)
    }, [props])
    return <>
        <Button onClick={clickHandle}>加粗</Button>
    </>;
}
