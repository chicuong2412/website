import React, { useEffect, useState } from 'react'
import style from './AppointmentHistory.module.scss'
import { faCalendar, faScissors, faUser, faCircle, faUpRightAndDownLeftFromCenter, faDownLeftAndUpRightToCenter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import $ from 'jquery'
import SmallServicePane from '../Booking/component/SmallServicePane'


export default function AppointmentPane(data) {

    const [expanded, setExpanded] = useState(false)

    return (
        <>
            {(!expanded) ? <Card data={data} setExpanded={() => setExpanded(true)} />
                : <ExpanedCard data={data} setExpanded={() => setExpanded(false)} />}
        </>
    )
}


function Card({ data, setExpanded }) {
    return (
        <div className={style.AppointmentPane}>
            <p><FontAwesomeIcon icon={faCalendar} /> {data.data.date}</p>
            <p className={style.services}><FontAwesomeIcon icon={faScissors} /> Expand to see more</p>
            <p><FontAwesomeIcon icon={faUser} /> {data.data.stylist}</p>
            <p><FontAwesomeIcon icon={faCircle} /> {data.data.status}</p>

            <span onClick={setExpanded} className={style.expandButton}><FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} /></span>
        </div>
    )
}

function ExpanedCard({ data, setExpanded }) {
    return (
        <div className={style.expandedCard}>
            <p><FontAwesomeIcon icon={faCalendar} /> Date: {data.data.date}</p>
            <p className={style.services}><FontAwesomeIcon icon={faScissors} /> List services:</p>
            {data.data.services.map((service) => (
                <><SmallServicePane heading={service} /> </>
            ))}
            <p><FontAwesomeIcon icon={faUser} /> {data.data.stylist}</p>
            <p><FontAwesomeIcon icon={faCircle} /> {data.data.status}</p>


            <span onClick={setExpanded} className={style.expandButton}><FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} /></span>
        </div>
    )
}