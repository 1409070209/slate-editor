import React, {useState} from 'react'
import './App.css';
import EditorSection from "./EditorSection";
import {Descendant, Element} from 'slate'
import {Table, TableProps, Tooltip} from 'antd'
import initRichTexts from './init'
import {getParagraphTypes, hasParagraphType} from './Util/paragraph'


function App() {
    const [nodes, setNodeList] = useState<Descendant[]>(initRichTexts)
    if (nodes.length < 1) {
        // 确保编辑器存在可编辑的区域
        setNodeList([
            {
                children: [{text: ''}]
            }
        ])
    }
    if (getParagraphTypes(nodes[nodes.length - 1] as Element).length) {
        setNodeList(nodes.concat({
            children: [{text: ''}]
        }))
    }
    const tableConfig:TableProps<Descendant> = {
        columns: [
            {
                title: '节点类型',
                dataIndex: 'type',
                key: 'type',
                width: 100,
                render(val, data) {
                    const types = Element.isElement(data) ? getParagraphTypes(data) : []
                    return JSON.stringify(types)
                }
            },
            {
                title: '节点value',
                dataIndex: 'children',
                key: 'children',
                width: 100,
                render: (_, data) => (
                    <Tooltip color={'white'} title={<pre style={{color: 'black'}}>{JSON.stringify(data, null, 2)}</pre>}>
                        <p style={{width: 100, textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>
                            {JSON.stringify(data)}
                        </p>
                    </Tooltip>
                ),
            }
        ],
        pagination: false,
        rowKey: () => Math.random(),
        dataSource: nodes
    }
    return (
    <div className="App">
        <div className={'node-list'}>
            <Table {...tableConfig}/>
        </div>
        <EditorSection nodes={nodes} setNodeList={setNodeList}/>
    </div>
);
}

export default App;
