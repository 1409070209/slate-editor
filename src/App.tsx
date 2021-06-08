import React, {useState} from 'react'
import './App.css';
import EditorSection from "./EditorSection";
import {Descendant} from 'slate'

function App() {
    const [nodes, setNodeList] = useState<Descendant[]>([
        {
            children: [{text: 'this is text'}]
        }
    ])
    return (
    <div className="App">
        <div className={'node-list'}>
            {
                nodes.map((node, index) => {
                    return <h5 key={index}>{JSON.stringify(node)}</h5>
                })
            }
        </div>
        <EditorSection nodes={nodes} setNodeList={setNodeList}/>
    </div>
);
}

export default App;
