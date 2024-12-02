import React from 'react'
import style from './AppointmentHistory.module.scss'
import AppointmentPane from './AppointmentPane'
import AppointmentTable from './AppointmentTable'


let data = [{
    date: "14-12-2024 9:30PM",
    status: "Waiting",
    stylist: "Cuong",
    services: ["Combo Cắt Gội Massage Giãn Cơ Cổ Vai Gáy Bằng Đá Nóng", "Combo Cắt Gội Massage Chăm Sóc Da Chuyên Sâu Thương Gia"]
}, {
    date: "15-12-2024 9:30PM",
    status: "Cancel",
    stylist: "Cuong",
    services: ["Combo Cắt Gội Massage Giãn Cơ Cổ Vai Gáy Bằng Đá Nóng", "Combo Cắt Gội Massage Chăm Sóc Da Chuyên Sâu Thương Gia"]
}, {
    date: "15-12-2024 9:30PM",
    status: "Cancel",
    stylist: "Cuong",
    services: ["Combo Cắt Gội Massage Giãn Cơ Cổ Vai Gáy Bằng Đá Nóng", "Combo Cắt Gội Massage Chăm Sóc Da Chuyên Sâu Thương Gia"]
}, {
    date: "15-12-2024 9:30PM",
    status: "Cancel",
    stylist: "Cuong",
    services: ["Combo Cắt Gội Massage Giãn Cơ Cổ Vai Gáy Bằng Đá Nóng", "Combo Cắt Gội Massage Chăm Sóc Da Chuyên Sâu Thương Gia"]
}, {
    date: "15-12-2024 9:30PM",
    status: "Cancel",
    stylist: "Cuong",
    services: ["Combo Cắt Gội Massage Giãn Cơ Cổ Vai Gáy Bằng Đá Nóng", "Combo Cắt Gội Massage Chăm Sóc Da Chuyên Sâu Thương Gia"]
}, {
    date: "15-12-2024 9:30PM",
    status: "Cancel",
    stylist: "Cuong",
    services: ["Combo Cắt Gội Massage Giãn Cơ Cổ Vai Gáy Bằng Đá Nóng", "Combo Cắt Gội Massage Chăm Sóc Da Chuyên Sâu Thương Gia"]
}, {
    date: "15-12-2024 9:30PM",
    status: "Cancel",
    stylist: "Cuong",
    services: ["Combo Cắt Gội Massage Giãn Cơ Cổ Vai Gáy Bằng Đá Nóng", "Combo Cắt Gội Massage Chăm Sóc Da Chuyên Sâu Thương Gia"]
}, {
    date: "15-12-2024 9:30PM",
    status: "Cancel",
    stylist: "Cuong",
    services: ["Combo Cắt Gội Massage Giãn Cơ Cổ Vai Gáy Bằng Đá Nóng", "Combo Cắt Gội Massage Chăm Sóc Da Chuyên Sâu Thương Gia"]
}, {
    date: "15-12-2024 9:30PM",
    status: "Cancel",
    stylist: "Cuong",
    services: ["Combo Cắt Gội Massage Giãn Cơ Cổ Vai Gáy Bằng Đá Nóng", "Combo Cắt Gội Massage Chăm Sóc Da Chuyên Sâu Thương Gia"]
}, {
    date: "15-12-2024 9:30PM",
    status: "Cancel",
    stylist: "Cuong",
    services: ["Combo Cắt Gội Massage Giãn Cơ Cổ Vai Gáy Bằng Đá Nóng", "Combo Cắt Gội Massage Chăm Sóc Da Chuyên Sâu Thương Gia"]
}, {
    date: "15-12-2024 9:30PM",
    status: "Cancel",
    stylist: "Cuong",
    services: ["Combo Cắt Gội Massage Giãn Cơ Cổ Vai Gáy Bằng Đá Nóng", "Combo Cắt Gội Massage Chăm Sóc Da Chuyên Sâu Thương Gia"]
}, {
    date: "15-12-2024 9:30PM",
    status: "Cancel",
    stylist: "Cuong",
    services: ["Combo Cắt Gội Massage Giãn Cơ Cổ Vai Gáy Bằng Đá Nóng", "Combo Cắt Gội Massage Chăm Sóc Da Chuyên Sâu Thương Gia"]
}, {
    date: "14-12-2024 9:30PM",
    status: "Cancel",
    stylist: "Cuong",
    services: ["Combo Cắt Gội Massage Giãn Cơ Cổ Vai Gáy Bằng Đá Nóng", "Combo Cắt Gội Massage Chăm Sóc Da Chuyên Sâu Thương Gia"]
}, {
    date: "15-12-2024 9:30PM",
    status: "Cancel",
    stylist: "Cuong",
    services: ["Combo Cắt Gội Massage Giãn Cơ Cổ Vai Gáy Bằng Đá Nóng", "Combo Cắt Gội Massage Chăm Sóc Da Chuyên Sâu Thương Gia"]
}, {
    date: "15-12-2024 9:30PM",
    status: "Cancel",
    stylist: "Cuong",
    services: ["Combo Cắt Gội Massage Giãn Cơ Cổ Vai Gáy Bằng Đá Nóng", "Combo Cắt Gội Massage Chăm Sóc Da Chuyên Sâu Thương Gia"]
}, {
    date: "15-12-2024 9:30PM",
    status: "Cancel",
    stylist: "Cuong",
    services: ["Combo Cắt Gội Massage Giãn Cơ Cổ Vai Gáy Bằng Đá Nóng", "Combo Cắt Gội Massage Chăm Sóc Da Chuyên Sâu Thương Gia"]
}, {
    date: "15-12-2024 9:30PM",
    status: "Cancel",
    stylist: "Cuong",
    services: ["Combo Cắt Gội Massage Giãn Cơ Cổ Vai Gáy Bằng Đá Nóng", "Combo Cắt Gội Massage Chăm Sóc Da Chuyên Sâu Thương Gia"]
}, {
    date: "15-12-2024 9:30PM",
    status: "Cancel",
    stylist: "Cuong",
    services: ["Combo Cắt Gội Massage Giãn Cơ Cổ Vai Gáy Bằng Đá Nóng", "Combo Cắt Gội Massage Chăm Sóc Da Chuyên Sâu Thương Gia"]
}, {
    date: "15-12-2024 9:30PM",
    status: "Cancel",
    stylist: "Cuong",
    services: ["Combo Cắt Gội Massage Giãn Cơ Cổ Vai Gáy Bằng Đá Nóng", "Combo Cắt Gội Massage Chăm Sóc Da Chuyên Sâu Thương Gia"]
}, {
    date: "15-12-2024 9:30PM",
    status: "Cancel",
    stylist: "Cuong",
    services: ["Combo Cắt Gội Massage Giãn Cơ Cổ Vai Gáy Bằng Đá Nóng", "Combo Cắt Gội Massage Chăm Sóc Da Chuyên Sâu Thương Gia"]
}, {
    date: "15-12-2024 9:30PM",
    status: "Cancel",
    stylist: "Cuong",
    services: ["Combo Cắt Gội Massage Giãn Cơ Cổ Vai Gáy Bằng Đá Nóng", "Combo Cắt Gội Massage Chăm Sóc Da Chuyên Sâu Thương Gia"]
}, {
    date: "15-12-2024 9:30PM",
    status: "Cancel",
    stylist: "Cuong",
    services: ["Combo Cắt Gội Massage Giãn Cơ Cổ Vai Gáy Bằng Đá Nóng", "Combo Cắt Gội Massage Chăm Sóc Da Chuyên Sâu Thương Gia"]
}, {
    date: "17-12-2024 9:30PM",
    status: "Waiting",
    stylist: "Cuong",
    services: ["Combo Cắt Gội Massage Giãn Cơ Cổ Vai Gáy Bằng Đá Nóng", "Combo Cắt Gội Massage Chăm Sóc Da Chuyên Sâu Thương Gia"]
}]

export default function AppointmentHistory() {



    return (
        <div className={style.apointmetWrapper}>
            <div className='container'>
                {/* <div className={style.tableHeading}>
                    <p>Appointment History</p>
                </div> */}
                <AppointmentTable data = {data}></AppointmentTable>
            </div>

        </div>
    )
}
