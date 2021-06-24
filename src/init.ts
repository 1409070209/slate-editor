import {Descendant} from 'slate'

const initRichTexts: Descendant[] = [
    {
        'children': [
            {
                'text': '使用Slate + TypeScript + React Hook + Antd实现的数据驱动的富文本编辑器，暂时不支持代码高亮，使用类似Virtual Dom的机制和思想去实现编辑器功能.扩展性将更好'
            }
        ]
    },
    {
        'image': {
            'url': 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
        },
        'children': [
            {
                'text': 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
            }
        ]
    },
    {
        'orderList': [],
        'children': [
            {
                'children': [
                    {
                        'text': '有顺序列表'
                    }
                ],
                'listItem': []
            },
            {
                'children': [
                    {
                        'text': '有顺序列表加粗样式',
                        'bold': {
                            'fontWeight': 'bold'
                        }
                    }
                ],
                'listItem': []
            }
        ]
    },
    {
        'children': [
            {
                'bold': {
                    'fontWeight': 'bold'
                },
                'text': ''
            }
        ]
    },
    {
        'unOrderList': [],
        'children': [
            {
                'children': [
                    {
                        'text': '无顺序列表',
                        'italic': {
                            'fontStyle': 'oblique'
                        }
                    }
                ],
                'listItem': []
            },
            {
                'children': [
                    {
                        'italic': {
                            'fontStyle': 'oblique'
                        },
                        'text': '无顺序列表加颜色',
                        'color': {
                            'color': 'rgb(235, 47, 150)'
                        }
                    }
                ],
                'listItem': []
            }
        ]
    }
]
export default initRichTexts
