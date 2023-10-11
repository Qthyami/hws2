import React, {useCallback, useState} from 'react'
import s from './HW11.module.css'
import s2 from '../../s1-main/App.module.css'
import { restoreState, saveState } from '../hw06/localStorage/localStorage' // Import saveState function
import SuperRange from './common/c7-SuperRange/SuperRange'

function HW11() {
    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState<number>(100)


    const change = useCallback((event: Event, newValue: number | number[]) => {
        if (Array.isArray(newValue)) {
            setValue1(newValue[0]);
            setValue2(newValue[1]);
        } else {
            setValue1(newValue);

        }
    }, []);

    return (
        <div id={'hw11'}>

            <div className={s2.hwTitle}>Homework #11</div>
            <hr style={{opacity:"20%"}}/>

            <div className={s2.hw}>
                <div className={s.container}>
                    <div className={s.wrapper}>
                        <span id={'hw11-value'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-single-slider'}
                            value={value1}
                            onChange={change}

                        />

                    </div>
                    <div className={s.wrapper}>
                        <span id={'hw11-value-1'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-double-slider'}
                            value={[value1, value2]}
                            onChange={change}
                        />

                        <span id={'hw11-value-2'} className={s.number}>{value2}</span>
                    </div>
                </div>
            </div>
            <hr style={{opacity:"20%"}}/>
        </div>
    )
}

export default HW11
