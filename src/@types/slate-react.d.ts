// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RenderElementProps } from 'slate-react';

declare module 'slate-react' {
    export interface RenderElementProps {
        params: any[]
    }
}
