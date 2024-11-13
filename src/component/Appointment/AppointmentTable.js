import React, { useState } from 'react'
import style from './AppointmentHistory.module.scss'
import AppointmentPane from './AppointmentPane'
import { Pagination, Stack } from '@mui/material'

export default function AppointmentTable({ data }) {
    let count = Math.ceil(data.length / 6);
    const [page, setPage] = useState(1)

    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <>
            <div className={style.table}>
                <Page data={data} page={page} size={6}></Page>
            </div>
            <div className={style.Pagination}>
                <Stack spacing={2}>
                    <Pagination count={count} page={page} onChange={handleChange} />
                </Stack>
            </div>

        </>

    )
}

function Page({ data, page, size }) {
    let temptDate = []
    for (let i in data) {
        if (i >= (page - 1) * size && i < page * size) {
            temptDate.push(data[i])
            if (i >= page * size) break;
        }
    }

    return (
        <>
            {temptDate.map((value) =>
                <AppointmentPane data={value}></AppointmentPane>
            )}
        </>
    )
}
