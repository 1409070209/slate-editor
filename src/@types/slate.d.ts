import {BaseElement, BaseText} from "slate";
import {CSSProperties} from 'react'

declare const ElementTypes = {
    orderList: 'orderList',
    listItem: 'listItem'
}
export declare type ElementType = typeof ElementTypes[string]
declare module 'slate' {
    export interface BaseElement {
        type?: ElementType,
    }
    export interface BaseText {
        bold?: CSSProperties;
        code?: CSSProperties;
        italic?: CSSProperties;
        underline?: CSSProperties;
        color?: CSSProperties;
        background?: CSSProperties;
        orderList?: Array;
    }
}
