import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'
import { faScissors } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import $ from 'jquery'
import "./BookingMainForm.css"
import SmallServicePane from './SmallServicePane'
import { DateTimePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/en-gb'
import { useInfo } from '../Booking'
import { useNavigate } from 'react-router-dom'



function BookingMainForm() {

    const {services} = useInfo()
    const {setServices} = useInfo()
    const {location} = useInfo()
    const {setLocation} = useInfo()
    const {stylist} = useInfo()
    const {setStylist} = useInfo()
    const {dateTime} = useInfo()
    const {setDateTime} = useInfo()
    const {data} = useInfo()

    const navigate = useNavigate()

    function setValue(date) {
        console.log(date.toString())
    }

    function getDateTime() {
        var currentdate = new Date();
        return (`${currentdate.getFullYear()}-${currentdate.getMonth()}-${currentdate.getDate()}T${currentdate.getHours()}:${currentdate.getMinutes()}`)
    }

    function heading(id) {
        for (let des of data) {
            if (des.id === id) return des.heading
        }
    }

    useEffect(() => {
        $(".clickChangeForm").on("click", function (event){
            navigate(`/booking/` + $(this).attr("datapage"))
        })
    }, [])

    return (
        <div className='holdMainInfo'>
            <div className="mb-3">
                <label className='stepStyle'>1. Choose location</label>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faLocationCrosshairs} /></span>
                    <input type="text" datapage="step1" className="form-control clickChangeForm" placeholder={(location) ? location.address : "Click to choose"} readOnly></input>
                </div>
            </div>
            <div className="mb-3">
                <label className='stepStyle'>2. Choose services</label>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faScissors} /></span>
                    <input type="text" datapage="step2" className="form-control clickChangeForm" placeholder="Click to choose" readOnly></input>
                </div>

                <div className='listServices'>
                    {services.map((value) =>
                        <SmallServicePane
                            id={value.id}
                            heading={value.heading}
                        ></SmallServicePane>
                    )}
                </div>
            </div>
            <div className="mb-3">
                <label className='stepStyle'>3. Choose stylist</label>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faUser} /></span>
                    <input type="text" datapage="step3" className="form-control clickChangeForm" placeholder={stylist || "Click to choose"} readOnly></input>
                </div>
            </div>
            <div className="mb-3">
                <label className='stepStyle'>4. Choose date</label>
                <div className="input-group mb-3">
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
                        <DateTimePicker
                            label="Appointment date"
                            defaultValue={dayjs(getDateTime())}
                            onAccept={(newValue) => setDateTime(newValue)}
                        />
                    </LocalizationProvider>
                </div>
            </div>
            <button type="button" className="btn btn-primary btn-lg center submit">Confirm booking</button>

        </div>
    );
}

export default BookingMainForm;