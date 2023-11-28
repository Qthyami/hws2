import React from 'react';

// Импортируйте иконки
import downIcon from './asserts/down.svg';
import upIcon from './asserts/up.svg';
import noneIcon from './asserts/sort-icon.svg';

export type SuperSortPropsType = {
    id?: string;
    sort: string;
    value: string;
    onChange: (newSort: string) => void;
};

const SuperSort: React.FC<SuperSortPropsType> = ({ sort, value, onChange, id = 'hw15' }) => {
    // const [currentSort, setCurrentSort] = useState<string>(sort);

    const up = '0' + value;
    const down = '1' + value;

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }



    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon


    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >

            <img alt={"sort-icon"}
                id={id + '-icon-' + sort}
                src={icon}
            />

            {/*{icon} /!*а это убрать*!/*/}
        </span>
    )
}

export default SuperSort;

export const pureChange = (sort: string, down: string, up: string) => {
    debugger
    return sort === down ? up : sort === up ? '' : down;
};