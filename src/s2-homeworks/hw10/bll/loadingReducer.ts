import {Dispatch} from "redux";


type InitStateType=typeof initState
const initState = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case "CHANGE_LOADING":
            return {...state,isLoading:action.isLoading }
        default:
            return state
    }
}
type ActionType = LoadingActionType;
type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})

export const loadingTC =()=>(dispatch: Dispatch<ActionType>)=>{
    dispatch(loadingAC(true))
    console.log("timeOutStarts!")
    setTimeout(()=>{
        dispatch(loadingAC(false))
    }, 1500)

}
