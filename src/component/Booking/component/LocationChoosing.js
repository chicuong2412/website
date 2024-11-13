import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/index.umd'
import LocationPane from './LocationPane';
import { useEffect } from 'react';
import $ from 'jquery'
import { useInfo } from '../Booking';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';



const locationNode = {
    address: "137, hoan",
    imgSrc: "",
    heading: ""
}


export default function LocationChoosing() {

    const { changeLocation } = useInfo()
    const { dataLocation } = useInfo()

    const navigate = useNavigate()

    useEffect(() => {
        $(".table").on("click", ".paneClick", function (event) {
            console.log($(this).attr("id"))
            changeLocation($(this).attr("id"))
        })

        $(".backIcon").on("click", function () {
            navigate('/booking')
        })
    }, [])

    return (
        <div className='holdMainInfo'>
            <div className='LocationForm'>
                <div className='LocationChoosingHead'>
                    <FontAwesomeIcon className='backIcon' icon={faArrowLeft} />
                    <h1 className='heading'>Choosing location</h1>
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
                <div className='resultSearch'>
                    <div className='table'>
                        {
                            dataLocation.map((value) =>
                                <LocationPane
                                    id={value.id}
                                    address={value.address}
                                    imgSrc={value.imgSrc}
                                    note={value.note}
                                ></LocationPane>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

