import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => {
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                let sortedUP = [...state];
                sortedUP.sort((a, b) => {
                    return a.name.localeCompare(b.name);
                });
                return sortedUP; // Возвращаем отсортированный массив
            } else if (action.payload === 'down') {
                let sortedDown = [...state];
                sortedDown.sort((a, b) => {
                    return b.name.localeCompare(a.name);
                });
                return sortedDown; // Возвращаем отсортированный массив
            }
            break; // Завершаем обработку случая 'sort'
        }
        case 'check': {
            return state.filter(el => el.age >= 18);
        }
        default:
            return state;
    }
};
