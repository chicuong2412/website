import 'bootstrap/dist/css/bootstrap.min.css'
import '../Booking/css/Booking.css'
import ServiceBookingForm from './component/ServiceBookingForm';
import { createContext, useEffect, useState } from 'react';
import BookingMainForm from './component/BookingMainForm';
import LocationChoosing from './component/LocationChoosing';
import StylistBookingForm from './component/StylistBookingForm';
import React from 'react';
import $ from 'jquery'
import dayjs from 'dayjs';
import { useContext } from 'react';
import { Routes, Route } from "react-router-dom";


var data = [{
    detail: "Combo cắt kỹ, Combo gội massage bấm huyệt đầu 10 phút, Massage cổ vai gáy bằng đá nóng Himalaya 15 phút Chăm",
    imgSrc: "https://storage.30shine.com/service/combo_booking/1053.png",
    heading: "Combo Cắt Gội Massage Giãn Cơ Cổ Vai Gáy Bằng Đá Nóng",
    id: "1",
    isChosen: "false",
    price: 100
}, {
    detail: "Combo cắt kỹ, Combo chăm sóc da chuyên sâu sáng đều màu da bằng thiết bị công nghệ cao",
    imgSrc: "https://storage.30shine.com/service/combo_booking/1054.png",
    heading: "Combo Cắt Gội Massage Chăm Sóc Da Chuyên Sâu Thương Gia",
    id: "2",
    isChosen: "false",
    price: 100
}, {
    detail: "Combo cắt kỹ, Combo gội massage bấm huyệt đầu 10 phút, Massage cổ vai gáy bằng đá nóng Himalaya 15 phút Chăm",
    imgSrc: "https://storage.30shine.com/service/combo_booking/1052.png",
    heading: "Combo Cắt Gội Thương Gia Cơ Bản",
    id: "3",
    isChosen: "false",
    price: 100
}, {
    detail: "Combo cắt kỹ, Combo gội massage thư giãn",
    imgSrc: "https://storage.30shine.com/service/combo_booking/1057.png",
    heading: "Combo Cắt Gội Massage Cổ Vai Gáy Thương Gia",
    id: "4",
    isChosen: "false",
    price: 100
}]

var dataStylist = [{
    descrip: "Good on bed",
    imgSrc: "https://scontent.fsgn21-1.fna.fbcdn.net/v/t39.30808-1/434716277_1437149086898140_583746038080099202_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=MZGPIwEFI7wQ7kNvgGe3u5u&_nc_zt=24&_nc_ht=scontent.fsgn21-1.fna&_nc_gid=AigooXh2vx8hAhwtoWKI0KT&oh=00_AYAAkr8lNEhKFzgV6LDG51v3BqSDoUcu0puu94xdtmiwEQ&oe=672EA083",
    name: "Dang Phu Tan",
    id: "1",
    rate: 4.3
}, {
    descrip: "Good on bed",
    imgSrc: "https://scontent.fsgn21-1.fna.fbcdn.net/v/t39.30808-1/434716277_1437149086898140_583746038080099202_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=MZGPIwEFI7wQ7kNvgGe3u5u&_nc_zt=24&_nc_ht=scontent.fsgn21-1.fna&_nc_gid=AigooXh2vx8hAhwtoWKI0KT&oh=00_AYAAkr8lNEhKFzgV6LDG51v3BqSDoUcu0puu94xdtmiwEQ&oe=672EA083",
    name: "Dang Phu Tan",
    id: "2",
    rate: 4.3
}, {
    descrip: "Good on bed",
    imgSrc: "https://scontent.fsgn21-1.fna.fbcdn.net/v/t39.30808-1/434716277_1437149086898140_583746038080099202_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=MZGPIwEFI7wQ7kNvgGe3u5u&_nc_zt=24&_nc_ht=scontent.fsgn21-1.fna&_nc_gid=AigooXh2vx8hAhwtoWKI0KT&oh=00_AYAAkr8lNEhKFzgV6LDG51v3BqSDoUcu0puu94xdtmiwEQ&oe=672EA083",
    name: "Dang Phu Tan",
    id: "3",
    rate: 4.3
}, {
    descrip: "Good on bed",
    imgSrc: "https://scontent.fsgn21-1.fna.fbcdn.net/v/t39.30808-1/434716277_1437149086898140_583746038080099202_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=MZGPIwEFI7wQ7kNvgGe3u5u&_nc_zt=24&_nc_ht=scontent.fsgn21-1.fna&_nc_gid=AigooXh2vx8hAhwtoWKI0KT&oh=00_AYAAkr8lNEhKFzgV6LDG51v3BqSDoUcu0puu94xdtmiwEQ&oe=672EA083",
    name: "Dang Phu Tan",
    id: "4",
    rate: 4.3
}, {
    descrip: "Good on bed",
    imgSrc: "https://scontent.fsgn21-1.fna.fbcdn.net/v/t39.30808-1/434716277_1437149086898140_583746038080099202_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=MZGPIwEFI7wQ7kNvgGe3u5u&_nc_zt=24&_nc_ht=scontent.fsgn21-1.fna&_nc_gid=AigooXh2vx8hAhwtoWKI0KT&oh=00_AYAAkr8lNEhKFzgV6LDG51v3BqSDoUcu0puu94xdtmiwEQ&oe=672EA083",
    name: "Dang Phu Tan",
    id: "4",
    rate: 4.3
}, {
    descrip: "Good on bed",
    imgSrc: "https://scontent.fsgn21-1.fna.fbcdn.net/v/t39.30808-1/434716277_1437149086898140_583746038080099202_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=MZGPIwEFI7wQ7kNvgGe3u5u&_nc_zt=24&_nc_ht=scontent.fsgn21-1.fna&_nc_gid=AigooXh2vx8hAhwtoWKI0KT&oh=00_AYAAkr8lNEhKFzgV6LDG51v3BqSDoUcu0puu94xdtmiwEQ&oe=672EA083",
    name: "Dang Phu Tan",
    id: "4",
    rate: 4.3
}, {
    descrip: "Good on bed",
    imgSrc: "https://scontent.fsgn21-1.fna.fbcdn.net/v/t39.30808-1/434716277_1437149086898140_583746038080099202_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=MZGPIwEFI7wQ7kNvgGe3u5u&_nc_zt=24&_nc_ht=scontent.fsgn21-1.fna&_nc_gid=AigooXh2vx8hAhwtoWKI0KT&oh=00_AYAAkr8lNEhKFzgV6LDG51v3BqSDoUcu0puu94xdtmiwEQ&oe=672EA083",
    name: "Dang Phu Tan",
    id: "4",
    rate: 4.3
}]

var dataLocation = [{
    id: "1",
    address: "10 Trần Phú, P. Mộ Lao, Q. Hà Đông, Hà Nội",
    imgSrc: "https://storage.30shine.org/salon_image/front/default.jpg",
    note: "10 Trần Phú, P. Mộ Lao, Q. Hà Đông, Hà NộiSố 10 Trần Phú - Gần toà nhà MacPlaza. Cách hầm chui Nguyễn Trãi 700m hướng về phía Hà Đông"
}, {
    id: "2",
    address: "104 Cửa Bắc, P. Quán Thánh, Q. Ba Đình,TP Hà Nội",
    imgSrc: "https://storage.30shine.org/salon_image/front/default.jpg",
    note: "Đối diện Trường THPT Phan Đình Phùng"
}, {
    id: "3",
    address: "104 Cửa Bắc, P. Quán Thánh, Q. Ba Đình,TP Hà Nội",
    imgSrc: "https://storage.30shine.org/salon_image/front/default.jpg",
    note: "Đối diện Trường THPT Phan Đình Phùng"
}, {
    id: "4",
    address: "104 Cửa Bắc, P. Quán Thánh, Q. Ba Đình,TP Hà Nội",
    imgSrc: "https://storage.30shine.org/salon_image/front/default.jpg",
    note: "Đối diện Trường THPT Phan Đình Phùng"
}, {
    id: "5",
    address: "104 Cửa Bắc, P. Quán Thánh, Q. Ba Đình,TP Hà Nội",
    imgSrc: "https://storage.30shine.org/salon_image/front/default.jpg",
    note: "Đối diện Trường THPT Phan Đình Phùng"
}, {
    id: "6",
    address: "104 Cửa Bắc, P. Quán Thánh, Q. Ba Đình,TP Hà Nội",
    imgSrc: "https://storage.30shine.org/salon_image/front/default.jpg",
    note: "Đối diện Trường THPT Phan Đình Phùng"
}]

const BookingInfo = createContext()

function BookingSite() {

    const [location, setLocation] = useState();
    var [services, setServices] = useState([]);
    const [stylist, setStylist] = useState();
    const [dateTime, setDateTime] = useState();

    function changeLocation(id) {
        for (let locationNode of dataLocation) {
            if (locationNode.id === id) {
                setLocation(locationNode)
                break;
            }
        }
    }

    function changeServices(id) {
        var index = services.findIndex((value) => {
            return id === value.id;
        })
        if (index !== -1) {
            console.log("del");
            
            services.splice(index)
        } else {
            services.push(data.find((value) => {
                return id === value.id;
            }))
            
        }
    }



    return (
        <BookingInfo.Provider value={{ services, changeServices, location, changeLocation, stylist, setStylist, dateTime, setDateTime, data, dataStylist, dataLocation }}>
            <div className='headingPane'>
                <div className='siteName'>
                    Booking
                </div>
                <div className='breadcrumbBoard'>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Booking</li>
                    </ol>
                </div>
            </div>
            <div className='container-Booking'>
                <Routes>
                    <Route path='/' element={<BookingMainForm></BookingMainForm>}></Route>
                    <Route path='/step1' element={<LocationChoosing></LocationChoosing>}></Route>
                    <Route path='/step2' element={<ServiceBookingForm></ServiceBookingForm>}></Route>
                    <Route path='/step3' element={<StylistBookingForm></StylistBookingForm>}></Route>
                </Routes>

            </div>
        </BookingInfo.Provider>

    );
}

export const useInfo = () => useContext(BookingInfo)

export default BookingSite;