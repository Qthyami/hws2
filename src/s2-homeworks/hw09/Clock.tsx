import React, {useEffect, useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number |NodeJS.Timeout | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)
    const [startTimer,setStartTimer] = useState<boolean>(false)


    const start = () => {
        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
        setStartTimer(true)




    }

    const stop = () => {
        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
        setStartTimer(false)
        clearInterval(timerId)
        console.log(timerId)
    }
    useEffect(() => {
        let timerID: NodeJS.Timeout | undefined;

        if (startTimer) {
            timerID = setInterval(() => {
                setDate(new Date(restoreState('hw9-date', Date.now())));
            }, 1000);
            setTimerId(timerID)
            console.log(timerId)
       }  // else if (timerID !== undefined) {
        //     clearInterval(timerID);
        // }
 return () => {
            if (timerID !== undefined) {
                clearInterval(timerID);
            }
        };

    }, [startTimer]);

    const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
        setShow(true)
    }
    const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
        setShow(false)
    }
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Месяцы в JavaScript начинаются с 0, поэтому добавляем 1
    const year = date.getFullYear();
    const stringTime = `${hours}:${minutes}:${seconds}` || <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
    const stringDate = `${day}.${month}.${year}` || <br/>

    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)

    const stringDay = new Intl.DateTimeFormat('en-US', { weekday: 'long'}).format(date)|| <br/> // пишут студенты
    const stringMonth = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date) || <br/> // пишут студенты

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span  id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'} onMouseEnter={onMouseEnter}
                      onMouseLeave={onMouseLeave}
                >

                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>

                <div className={s.more}>

                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={startTimer} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!startTimer} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock