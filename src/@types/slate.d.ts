import {BaseElement, BaseText, BasePoint} from "slate";
import {CSSProperties} from 'react'

declare const ElementTypes = {
    orderList: 'orderList',
    listItem: 'listItem',
    link: 'link'
}
export declare type ElementType = typeof ElementTypes[string]

export interface IHrefProps {
    style: CSSProperties,
    url: string
    text?: string
}
declare module 'slate' {
    export interface BaseElement {
        type?: ElementType,
        url?: string
        css?: CSSProperties[]
    }
    export interface BaseText {
        bold?: CSSProperties;
        code?: CSSProperties;
        italic?: CSSProperties;
        underline?: CSSProperties;
        color?: CSSProperties;
        background?: CSSProperties;
        orderList?: Array;
        link?: string;
    }
}
