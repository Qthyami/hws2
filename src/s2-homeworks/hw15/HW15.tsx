import React, {useEffect, useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW15.module.css'
import axios from 'axios'
import SuperPagination from './common/c9-SuperPagination/SuperPagination'
import {useSearchParams} from 'react-router-dom'
import SuperSort from './common/c10-SuperSort/SuperSort'
import CircularProgress from "@mui/material/CircularProgress";


/*
* 1 - дописать SuperPagination
* 2 - дописать SuperSort
* 3 - проверить pureChange тестами
* 3 - дописать sendQuery, onChangePagination, onChangeSort в HW15
* 4 - сделать стили в соответствии с дизайном
* 5 - добавить HW15 в HW5/pages/JuniorPlus
* */

type TechType = {
    id: number
    tech: string
    developer: string
}

type ParamsType = {
    sort: string
    page: number
    count: number
}

const getTechs = (params: ParamsType) => {
    return axios
        .get<{ techs: TechType[], totalCount: number }>(
            'https://samurai.it-incubator.io/api/3.0/homework/test3',
            {params}
        )
        .catch((e) => {
            alert(e.response?.data?.errorText || e.message)
            throw e;
        })
}

const HW15 = () => {
    const [sort, setSort] = useState('')
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(4)
    const [idLoading, setLoading] = useState(false)
    const [totalCount, setTotalCount] = useState(100)
    const [searchParams, setSearchParams] = useSearchParams()
    const [techs, setTechs] = useState<TechType[]>([])

    const sendQuery = (params: any) => {
        debugger
        setLoading(true)
        getTechs(params)
            .then((res) => {


                setTechs(res.data.techs);

                setTotalCount(res.data.totalCount)
                setLoading(false)

            })
    }

    const onChangePagination = (newPage: number, newCount: number) => {
        // делает студент

        setPage(newPage)

        setCount(newCount)

        sendQuery({sort, page:newPage, count:newCount})

        // @ts-ignore
        setSearchParams({sort:sort, page:newPage, count:newCount});
        debugger

    }

    const onChangeSort = (newSort: string) => {



        setSort(newSort);
        setPage(1);
        sendQuery({ sort:newSort, page:1, count });



        setSearchParams({ sort:newSort });


    }

    useEffect(() => {
        const params = Object.fromEntries(searchParams)
        sendQuery({page: params.page, count: params.count})
        setPage(+params.page || 1)
        setCount(+params.count || 4)
    }, [])

    const mappedTechs = techs.map((t, index) => (
        <React.Fragment key={t.id}>
            <div className={s.row}>
                <div id={'hw15-tech-' + t.id} className={s.tech}>
                    {t.tech}
                </div>

                <div id={'hw15-developer-' + t.id} className={s.developer}>
                    {t.developer}
                </div>
            </div>
            {index < techs.length - 1 && <div className={s.divider} />}
        </React.Fragment>
    ));

    return (
        <div id={'hw15'}>
            <div className={s2.hwTitle}>Homework #15</div>
        <div className={s2.hw}>
            <div className={s.blurContainer}>

                {idLoading && <div className={s.blurOverlay} />}

                <div className={s.loadingContainer}>
                    {idLoading && (
                        <div className={s.loading}>
                            <CircularProgress />
                        </div>
                    )}
                </div>

                <SuperPagination
                    page={page}
                    itemsCountForPage={count}
                    totalCount={totalCount}
                    onChange={onChangePagination}
                />
                <div style={{maxWidth:"45%"}}>
                <div className={s.rowHeader}>
                    <div className={s.techHeader}>
                        Tech
                        <SuperSort sort={sort} value={'tech'} onChange={onChangeSort}/>
                    </div>

                    <div className={s.developerHeader}>
                        Developer
                        <SuperSort sort={sort} value={'developer'} onChange={onChangeSort}/>
                    </div>
                </div>


                {mappedTechs}
                </div>
            </div>
        </div>
        </div>
    )
}

export default HW15
