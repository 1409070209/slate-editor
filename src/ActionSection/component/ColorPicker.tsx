import React from 'react'

import { colors } from './color'
interface IColorPicker {
    onColorChange: (color: string, e: React.MouseEvent) => void
}
export default function ColorPicker(props: IColorPicker): JSX.Element {
    const {
        onColorChange
    } = props
    return <div style={{
        padding: 10, backgroundColor: 'white', boxShadow: '0 2px 10px rgb(0 0 0 / 12%)',
    }}>
        <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(10, 30px)`,
            gridColumnGap: 5,
            gridRowGap: 5
        }}>
            {
                colors.map(color => {
                    return <span key={color}
                                 data-color={color}
                                 onMouseDown={(e) => onColorChange(color, e)}
                                 style={{
                                     width: 20, height: 20, backgroundColor: color, display: 'inline-block', cursor: 'pointer'
                                 }}
                    />
                })
            }
        </div>
    </div>
}
