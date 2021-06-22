import {MARK_TYPE_ENUM, PARAGRAPH_TYPE_ENUM} from '../enum'
import {getMark, hasType} from './index'
import {BaseElement, BaseText} from 'slate'


export const paragraphChildrenType = new Map<PARAGRAPH_TYPE_ENUM, PARAGRAPH_TYPE_ENUM>()
paragraphChildrenType.set(PARAGRAPH_TYPE_ENUM.orderList, PARAGRAPH_TYPE_ENUM.listItem)
paragraphChildrenType.set(PARAGRAPH_TYPE_ENUM.unOrderList, PARAGRAPH_TYPE_ENUM.listItem)

export const hasParagraphType = (node: BaseElement) => {
    for (const keyValue of paragraphChildrenType) {
        const key = keyValue[0]
        if (hasType(node, key as PARAGRAPH_TYPE_ENUM)) return true
    }
    return false
}

export const getParagraphTypes = (node: BaseElement) => {
    const ans = []
    for (const type in PARAGRAPH_TYPE_ENUM) {
        if (hasType(node, type as PARAGRAPH_TYPE_ENUM)) {
            ans.push(type)
        }
    }
    return ans
}

export const getLeafTypes = (node: BaseText) => {
    const ans = []
    for (const type in MARK_TYPE_ENUM) {
        if (getMark(node, type as MARK_TYPE_ENUM)) {
            ans.push(type)
        }
    }
    return ans
}
