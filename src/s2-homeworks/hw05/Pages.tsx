import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
}

function Pages() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR} />} />
                <Route path={'/page/junior'} element={<Navigate to={PATH.JUNIOR} />} />
                <Route path={'/page/junior-plus'} element={<Navigate to={PATH.JUNIOR_PLUS} />} />
                <Route path={'/*'} element={<Error404 />} />
            </Routes>
        </div>
    )
}
export default Pages
