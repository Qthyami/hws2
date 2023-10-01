import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import s from './HW8.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import User from './User'
import TableContainer from '@mui/material/TableContainer'; // Импорт компонента TableContainer из MUI
import Table from '@mui/material/Table'; // Импорт компонента Table из MUI
import TableHead from '@mui/material/TableHead'; // Импорт компонента TableHead из MUI
import TableRow from '@mui/material/TableRow'; // Импорт компонента TableRow из MUI
import TableCell from '@mui/material/TableCell'; // Импорт компонента TableCell из MUI
import TableBody from '@mui/material/TableBody';
import {Paper} from "@mui/material";
/*
* 1 - дописать типы и логику (сортировка по имени, фильтрация по совершеннолетию) homeWorkReducer, проверить тестом
* 2 - дописать компоненту User
* 3 - сделать стили в соответствии с дизайном
* */

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople: UserType[] = [
    // студенты могут поменять имя/возраст/количество объектов, _id должны быть целочисленные
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

const HW8 = () => {
    const [people, setPeople] = useState<UserType[]>(initialPeople)
    const [currentSort, setCurrentSort] = useState('')

    const finalPeople = people.map((u: UserType) => <User key={u._id} u={u}/>)

    const sortUp = () => {
        setPeople(
            homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'})
        ) // в алфавитном порядке a.name > b.name
        setCurrentSort('up')
    }

    const sortDown = () => {
        setPeople(
            homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'})
        ) // в обратном порядке a.name < b.name}
        setCurrentSort('down')
    }
    const check18 = () => {
        setPeople(
            homeWorkReducer(initialPeople, {type: 'check', payload: 18})
        ) // совершеннолетние
        setCurrentSort('18')
    }

    return (
        <div id={'hw3'}>
            <div className={s2.hwTitle}>Homework #8</div>
            <div className={s2.hw}>
                <div className={s.container}>
                    <div className={s.buttonsContainer}>
                        <SuperButton
                            id={'hw8-button-up'}
                            style={{margin:"10px"}}
                            onClick={sortUp}
                            xType={currentSort === 'up' ? '' : 'secondary'}
                        >
                            Sort up
                        </SuperButton>
                        <SuperButton
                            id={'hw8-button-down'}
                            style={{padding:"5px, 24px, 5px, 24px", gap:"10px", borderRadius:"3px"}}
                            onClick={sortDown}
                            xType={currentSort === 'down' ? '' : 'secondary'}
                        >
                            Sort down
                        </SuperButton>
                        <SuperButton
                            id={'hw8-button-18'}
                            style={{margin:"8x"}}
                            onClick={check18}
                            xType={currentSort === '18' ? '' : 'secondary'}
                        >
                            Check 18+
                        </SuperButton>
                    </div>

                    <TableContainer component={Paper} className={s.container}>
                        <Table id={'hw8-users'}sx={{width: 1/3, marginTop:"2%"}} className={s.users}>
                            <TableHead className={s.thead} sx={{ typography: { fontWeight: 'bold ' } }}>
                                <TableRow>
                                    <TableCell className={s.nameCol}>Name</TableCell>
                                    <TableCell className={s.ageCol}>Age</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>{finalPeople}</TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    )
}

export default HW8
