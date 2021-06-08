import {BaseElement, BaseText} from "slate";
import {CSSProperties} from 'react'

declare module 'slate' {
    export interface BaseElement {
        type?: string;
        params?: any
    }
    export interface BaseText {
        bold?: boolean;
        code?: boolean;
        italic?: boolean;
        underline?: boolean;
        color?: CSSProperties;
        background?: CSSProperties;
        [key: string]: boolean | CSSProperties
    }
}
