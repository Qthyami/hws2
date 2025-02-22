import React from 'react'

import { useAppDispatch, useAppSelector} from './bll/store'
import { loadingTC} from './bll/loadingReducer'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import s2 from '../../s1-main/App.module.css'
import {Loader} from './Loader'

/*
* 1 - в файле loadingReducer.ts дописать типы и логику
* 2 - получить isLoading из редакса
* 3 - дописать функцию setLoading
* 4 - сделать стили в соответствии с дизайном
* */

const HW10 = () => {
    // useSelector, useDispatch // пишет студент
    const isLoading = useAppSelector((state)=>state.loading.isLoading)
    const dispatch = useAppDispatch()

    const setLoading = () => { // пишет студент // показать крутилку на 1,5 секунд
        // dispatch
dispatch(loadingTC())
        // setTimeout
    }

    return (
        <div id={'hw10'}>
            <div className={s2.hwTitle}>Homework #10</div>
            <hr style={{opacity:"20%"}}/>
            <div className={s2.hw}>
                {isLoading ? (
                    <div id={'hw10-loading'}>
                        <Loader/>
                    </div>
                ) : (
                    <SuperButton
                        id={'hw10-button-start-loading'}
                        onClick={setLoading}
                    >
                        Set loading...
                    </SuperButton>
                )}
            </div>
            <hr style={{opacity:"20%"}}/>
        </div>
    )
}

export default HW10
