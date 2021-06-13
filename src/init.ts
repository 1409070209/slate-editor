import {Descendant} from 'slate'

const initRichTexts: Descendant[] = [
    {
        "children": [
            {
                "text": "使用Slate + TypeScript + React Hook + Antd实现的数据驱动的富文本编辑器，暂时不支持代码高亮，使用类似Virtual Dom的机制和思想去实现编辑器功能.扩展性将更好"
            }
        ]
    },
    {
        "type": "image",
        "url": "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
        "children": [
            {
                "text": "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            }
        ]
    },
    {
        "children": [
            {
                "text": "this is text",
                "bold": {
                    "fontWeight": "bold"
                },
                "italic": {
                    "fontStyle": "oblique"
                }
            }
        ]
    },
    {
        "children": [
            {
                "text": "underline",
                "underline": {
                    "textDecoration": "underline"
                }
            }
        ]
    },
    {
        "type": "orderList",
        "children": [
            {
                "children": [
                    {
                        "text": "有顺序列表"
                    }
                ],
                "type": "listItem"
            },
            {
                "type": "listItem",
                "children": [
                    {
                        "text": "有顺序列表带加粗样式",
                        "bold": {
                            "fontWeight": "bold"
                        }
                    }
                ]
            }
        ]
    },
    {
        "type": "unOrderList",
        "children": [
            {
                "children": [
                    {
                        "text": "无顺序列表"
                    }
                ],
                "type": "listItem"
            },
            {
                "type": "listItem",
                "children": [
                    {
                        "text": "无顺序列表带样式",
                        "color": {
                            "color": "green"
                        }
                    }
                ]
            }
        ]
    },
    {
        "children": [
            {
                "text": ""
            },
            {
                "type": "link",
                "url": "  https://ant.design/components/icon-cn/",
                "children": [
                    {
                        "text": "antd官网"
                    }
                ]
            },
            {
                "text": " 点击即可访问"
            },
            {
                "type": "link",
                "url": "  https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
                "children": [
                    {
                        "text": ""
                    }
                ]
            },
            {
                "text": ""
            }
        ]
    },
    {
        "children": [
            {
                "text": ""
            }
        ]
    },
    {
        "children": [
            {
                "text": ""
            }
        ]
    }
]
export default initRichTexts
