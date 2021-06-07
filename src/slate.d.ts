import {BaseElement, BaseText} from "slate";

declare module 'slate' {
    export interface BaseElement {
        type?: string,
        params?: any
    }

    export interface BaseText {
        bold?: boolean,
        code?: boolean,
        italic?: boolean,
        underline?: boolean
    }
}
