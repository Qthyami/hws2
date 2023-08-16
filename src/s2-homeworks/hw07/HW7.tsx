import React, { useEffect, useState } from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import s2 from '../../s1-main/App.module.css'
import s from './HW7.module.css'

const arr = [
    { id: 1, value: 'Pre-junior' },
    { id: 2, value: 'Junior' },
    { id: 3, value: 'Junior+' },
]

const HW7 = () => {
    const [value, onChangeOption] = useState(1)

    useEffect(() => {
        // Обработка синхронизации состояний
        // value обновлено в одном из компонентов, можно обработать здесь
    }, [value]);

    return (
        <div id={'hw7'}>
            <div className={s2.hwTitle}>Homework #7</div>

            <div className={s2.hw}>
                <div className={s.container}>
                    <SuperSelect
                        id={'hw7-super-select'}
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                    />
                    <SuperRadio
                        id={'hw7-super-radio'}
                        name={'hw7-radio'}
                        options={arr}
                        value={value}
                        onChangeOption={onChangeOption}
                    />
                </div>
            </div>
        </div>
    )
}

export default HW7
