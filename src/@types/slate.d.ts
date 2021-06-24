import { CSSProperties } from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BaseElement, BaseText } from 'slate';

declare const ElementTypes = {
    orderList: 'orderList',
    listItem: 'listItem',
    link: 'link'
}
export declare type ElementType = typeof ElementTypes[string]

// 为段落增加样式或者类名
interface BaseTypeProps {
    css?: CSSProperties,
    className?: string,
}
export interface IHrefProps extends BaseTypeProps{
    url: string,
    text: string
}
export interface IImageProps extends BaseTypeProps {
    url: string
}
export interface IListItem extends BaseTypeProps {
    children?: BaseText[]
}
declare module 'slate' {
    // 将BaseElement.type重构成BaseText那样支持参数的样子
    export interface BaseElement {
        orderList?: BaseTypeProps | []
        listItem?: IListItem | []
        unOrderList?: BaseTypeProps | []
        image?: IImageProps
        link?: IHrefProps,
    }
    export interface BaseText {
        bold?: CSSProperties
        code?: CSSProperties
        italic?: CSSProperties
        underline?: CSSProperties
        color?: CSSProperties
        background?: CSSProperties
        orderList?: Array
        text: string
    }
}
