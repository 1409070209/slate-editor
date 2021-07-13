export enum MARK_TYPE_ENUM {
    bold = 'bold',
    code = 'code',
    italic = 'italic',
    underline = 'underline',
    color = 'color',
    background = 'background',
}

export enum PARAGRAPH_TYPE_ENUM {
    orderList = 'orderList',
    listItem = 'listItem',
    unOrderList = 'unOrderList',
    image = 'image',
    link = 'link',
    code = 'code'
}

const PARAGRAPH_TYPE_LIST: string[] = []
for (let key in PARAGRAPH_TYPE_ENUM) {
    PARAGRAPH_TYPE_LIST.push(key)
}
export {
    PARAGRAPH_TYPE_LIST
}

