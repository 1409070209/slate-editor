import {ReactEditor} from 'slate-react'

const WithTable = (editor: ReactEditor) => {
    const { insertData, isVoid } = editor
    editor.isVoid = element => {
        return element.type === 'image' ? true : isVoid(element)
    }
    editor.insertData = data => {
        console.log(data)
        insertData(data)
    }
    return editor
}
export default WithTable
