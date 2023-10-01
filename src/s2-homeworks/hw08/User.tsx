import TableRow from '@mui/material/TableRow'; // Импорт компонента TableRow из MUI
import TableCell from '@mui/material/TableCell'
import React from 'react'
import { UserType } from './HW8'
import s from './HW8.module.css'

// types
type UserPropsType = {
    u: UserType
}

const User: React.FC<UserPropsType> = ({ u }) => {
    // @ts-ignore
    return (
        <TableRow className={s.item}>
            <TableCell id={'hw8-user-name-' + u._id} className={s.nameCol}>
                {u.name}
            </TableCell>
            <TableCell id={'hw8-user-age-' + u._id} className={s.ageCol}>
                {u.age}
            </TableCell>
        </TableRow>
    )
}

export default User
