import { loadingReducer } from './loadingReducer'
import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import { themeReducer } from '../../hw12/bll/themeReducer'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk'

const reducers = combineReducers({
    loading: loadingReducer, // hw10
    theme: themeReducer, // hw12
})

const store = legacy_createStore(reducers,applyMiddleware(thunkMiddleware))

export default store

export type AppStoreType = ReturnType<typeof reducers>
export const useAppSelector: TypedUseSelectorHook<AppStoreType> = useSelector
export type AppThunkDispatch = ThunkDispatch<AppStoreType, any, AnyAction>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();

// @ts-ignore
window.store = store // for dev // для того чтобы автотесты видели состояние данных
