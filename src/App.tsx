import React, {useState} from 'react'
import './App.css';
import EditorSection from "./EditorSection";
import {Descendant} from 'slate'
import {Table, TableProps} from 'antd'


function App() {
    const [nodes, setNodeList] = useState<Descendant[]>([
        {
            children: [{text: 'this is text'}]
        }
    ])

    if (nodes.length < 1) {
        // 确保编辑器存在可编辑的区域
        setNodeList([
            {
                children: [{text: ''}]
            }
        ])
    }
    if (Object.prototype.hasOwnProperty.call(nodes[nodes.length - 1], 'type')) {
        setNodeList(nodes.concat({
            children: [{text: ''}]
        }))
    }
    const tableConfig:TableProps<Descendant> = {
        columns: [
            {
                title: '节点类型',
                dataIndex: 'type',
                key: 'type'
            },
            {
                title: '节点value',
                dataIndex: 'children',
                key: 'children',
                render: value => (
                    <p style={{width: 300, textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden'}}>{JSON.stringify(value)}</p>
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
