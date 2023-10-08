// В компоненте SuperRange
import React from 'react'
import { Slider, SliderProps } from '@mui/material'
import s from './HW11.module.css' // Импортируйте стили

const SuperRange: React.FC<SliderProps> = React.memo((props) => {
    return (
        <Slider
            sx={{}}
            {...props} // отдаём слайдеру пропсы
        />
    )
})

export default SuperRange
