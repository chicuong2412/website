import React, { useEffect } from 'react'
import ServicePane from './ServicePane'
import $ from 'jquery'
import { useState } from 'react';
import { useInfo } from '../Booking';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'




export default function ServiceBookingForm() {

    const { data, changeServices } = useInfo()
    const navigate = useNavigate()

    useEffect(() => {
        $(".serviceTable").on('click', ".buttonChoosing", function () {
            changeServices(($(this).attr("id")))
        })

        $(".backIcon").on("click", function () {
            navigate('/booking')
        })
    }, []);

    return (
        <div className='holdFormServices'>
            <div className='LocationChoosingHead'>
                <FontAwesomeIcon className='backIcon' icon={faArrowLeft} />
                <h1 className='heading'>Choosing services</h1>
                <div className='searchField'>
                    <div className="input-group mb-0">
                        <input type="text" className="form-control" placeholder="Search by Name"></input>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary noBorderSearch" type="button"
                                id="button-addon2">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='gap'></div>
            <div className='resultSearch'>
                <div className='serviceTable'>
                    {data.map((service) =>
                        <ServicePane key={service.id}
                            detail={service.detail}
                            imgSrc={service.imgSrc}
                            heading={service.heading}
                            id={service.id}
                            price={service.price}
                        ></ServicePane>

                    )}

                </div>
            </div>
        </div>
    )
}
