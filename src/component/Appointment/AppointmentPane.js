import React, { useEffect, useState } from 'react'
import style from './AppointmentHistory.module.scss'
import { faCalendar, faScissors, faUser, faCircle, faUpRightAndDownLeftFromCenter, faDownLeftAndUpRightToCenter, faPenToSquare, faBan } from '@fortawesome/free-solid-svg-icons'
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
            <p><FontAwesomeIcon icon={faCalendar} /> <span className={style.title}>Date-time:</span> {data.data.date}</p>
            <p className={style.services}><FontAwesomeIcon icon={faScissors} /> <span className={style.title}>Services/Combos:</span> Expand to see more</p>
            <p><FontAwesomeIcon icon={faUser} /> <span className={style.title}>Stylist name: </span>{data.data.stylist}</p>
            <p><FontAwesomeIcon icon={faCircle} /> <span className={style.title}>Status: </span>{data.data.status}</p>
            {(data.data.status !== "Cancel" ? (<p><FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon> Click here to change</p>) : <></>)}
            {(data.data.status !== "Cancel" ? (<p className={style.cancelButton}><FontAwesomeIcon icon={faBan}></FontAwesomeIcon></p>) : <></>)}
            <span onClick={setExpanded} className={style.expandButton}><FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} /></span>
        </div>
    )
}

function ExpanedCard({ data, setExpanded }) {
    return (
        <div className={style.expandedCard}>
            <p><FontAwesomeIcon icon={faCalendar} /> Date-time: {data.data.date}</p>
            <p className={style.services}><FontAwesomeIcon icon={faScissors} /> List services/combos:</p>
            {data.data.services.map((service) => (
                <><SmallServicePane heading={service} /> </>
            ))}
            <p><FontAwesomeIcon icon={faUser} /> {data.data.stylist}</p>
            {(data.data.status !== "Cancel" ? (<p><FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon> Click here to change</p>) : <></>)}
            {(data.data.status !== "Cancel" ? (<p className={style.cancelButton}><FontAwesomeIcon icon={faBan}></FontAwesomeIcon></p>) : <></>)}

            <span onClick={setExpanded} className={style.expandButton}><FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} /></span>
        </div>
    )
}