import React, {useState} from 'react'
import './App.css';
import EditorSection from "./EditorSection";
import {BaseElement, BaseText, Descendant} from 'slate'
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
            ...nodes,
            {
                children: [{text: ''}]
            }
        ])
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
                render: value => JSON.stringify(value)
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
