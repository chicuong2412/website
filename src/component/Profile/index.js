import React, {useRef } from 'react'
import style from "../../style/Profile.module.scss"
import { TextField, FormLabel, Button } from '@mui/material';
import dayjs from 'dayjs';
import "dayjs/locale/en-gb"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import { Dropdown } from 'primereact/dropdown';
import $ from "jquery";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const [userInfo, setUserInfo] = React.useState({
        nameCustomer: "",
        phoneNumber: "",
        address: "",
        loyaltyPoint: 0,
    });
    var jwt = localStorage.getItem("AccessToken");
    React.useEffect(() => {
        $.ajax({
            url: `http://localhost:3120/identity/customers/getMyInfo`,
            type: 'GET',
            dataType: 'json',
            headers: {
                'Authorization': `Bearer ${jwt}`
            },
            CORS: false,
            contentType: 'application/json',
            secure: true,
            async: true,
            success: function (data) {
                setUserInfo(data.result);
            },
        })
    }, []);

    const typeCustomer = [
        { label: 'None', value: 'None' },
        { label: 'Broze', value: 'Broze' },
        { label: 'Silver', value: 'Silver' },
        { label: 'Gold', value: "Gold" },
        { label: 'Platinum', value: "Platinum" }
    ];

    console.log(userInfo.nameCustomer);

    const toast = useRef(null);

    const navigate = useNavigate();

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        navigate("/")
    }

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    const confirm1 = () => {
        confirmDialog({
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'accept',
            accept,
            reject
        });
    };


    return (
        <>
            <Toast ref={toast} />
            <ConfirmDialog />
            <div className={style.profileContainer}>
                <div class="row">
                    <div className={`${style.left} col-md-3 border-right`}>
                        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
                            <span class="font-weight-bold">{userInfo.username}</span>
                            <span class="text-black-50">{userInfo.email}</span>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <TextField
                            label="Name"
                            fullWidth
                            value={userInfo.nameCustomer}
                            margin='normal'
                            slotProps={
                                {
                                    input: {
                                        readOnly: true,
                                    },
                                }
                            }
                        >
                        </TextField>
                        <TextField
                            label="Phone number"
                            fullWidth
                            value={userInfo.phoneNumber}
                            margin='normal'
                            slotProps={
                                {
                                    input: {
                                        readOnly: true,
                                    },
                                }
                            }
                        >
                        </TextField>
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
                            <DateField
                                label="Date of birth"
                                margin='normal'
                                value={dayjs(userInfo.doB)}
                                fullWidth
                                slotProps={
                                    {
                                        input: {
                                            readOnly: true,
                                        },
                                    }
                                }

                            />
                        </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
                            <DateField
                                label="Start Date"
                                margin='normal'
                                value={dayjs(userInfo.startDate)}
                                fullWidth
                                slotProps={
                                    {
                                        input: {
                                            readOnly: true,
                                        },
                                    }
                                }
                            />
                        </LocalizationProvider>
                    </div>
                    <div className='col-4'>
                        <TextField
                            label="Address"
                            fullWidth
                            value={userInfo.address}
                            margin='normal'
                            slotProps={
                                {
                                    input: {
                                        readOnly: true,
                                    },
                                }
                            }
                        >
                        </TextField>
                        <TextField
                            label="Loyalty point"
                            fullWidth
                            value={userInfo.loyaltyPoint}
                            margin='normal'
                            slotProps={
                                {
                                    input: {
                                        readOnly: true,
                                    },
                                }
                            }
                        >
                        </TextField>
                        <FormLabel id="demo-radio-buttons-group-label">Type: </FormLabel>
                        <Dropdown options={typeCustomer} value={"None"} className={`${style.typeCustomer} typeDrop`}></Dropdown>
                        <br></br>
                        <Button onClick={confirm1} variant="contained" className={`${style.editProfile} editProfile`}>Edit</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
