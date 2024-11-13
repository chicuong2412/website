import React from 'react'
import style from '../Footers/Footer.module.scss'
import 'bootstrap/dist/css/bootstrap.css'

export default function Footer() {
    return (
        <footer>
            {/* <div className={style.wrap}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-3">
                            <div className={style.holdContent}>
                                <div className="imgLogo">
                                    <img src="./Images/logo-dark.png" alt=""></img>
                                </div>
                                <p>Hotel Luxe is an all-in-one WordPress theme to make hotel websites of any kind. Make the
                                    hotel website you’ve always dreamt of with Hotel Luxe.</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3">
                            <div className={style.holdContent}>
                                <p className={style.headingBlock}>
                                    CONTACT US
                                </p>
                                <ul>
                                    <li><i className="fa fa-map-marker" aria-hidden="true"></i>221 B, Baker Street, London</li>
                                    <li><a href=""><i className="fa fa-phone" aria-hidden="true"></i>+01-7458292</a></li>
                                    <li><a href=""><i className="fa fa-envelope-o" aria-hidden="true"></i>example@gmail.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3">
                            <div className={style.holdContent}>
                                <p className={style.headingBlock}>
                                    QUICK LINKS
                                </p>
                                <ul>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Terms & Conditions</a></li>
                                    <li><a href="">FAQ</a></li>
                                    <li><a href="">Newsletter</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3">
                            <div className={style.holdContent}>
                                <p className={style.headingBlock}>
                                    DON’T MISS ANY UPDATES
                                </p>
                                <form action="">
                                    <div className="input">
                                        <input className={style.inputMail} type="email" name="" id="" placeholder="Your Email"></input>
                                    </div>
                                    <button className={style.buttonSubmit}>SIGN UP NOW</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.lowFooter}>
                <p>© Built with pride and caffeine by ThemeBubble. All rights reserved.</p>
            </div> */}

            <section class="widget_section padding">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 sm-padding">
                            <div class="footer_widget">
                                <img class="mb-15" src="https://demo.harutheme.com/shang/wp-content/uploads/2019/04/logo-white.png" style={{ width: 250 + "px" }} alt="Brand" />
                                <p>Our barbershop is the created for men who appreciate premium quality, time and flawless look.</p>
                                <ul class="widget_social">
                                    <li><a href="#"><i class="social_facebook"></i></a></li>
                                    <li><a href="#"><i class="social_twitter"></i></a></li>
                                    <li><a href="#"><i class="social_googleplus"></i></a></li>
                                    <li><a href="#"><i class="social_instagram"></i></a></li>
                                    <li><a href="#"><i class="social_linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 sm-padding">
                            <div class="footer_widget">
                                <h3>Headquaters</h3>
                                <p>962 Fifth Avenue, 3rd Floor New York, NY10022</p>
                                <p>Hello@dynamiclayers.net <br />(+123) 456 789 101</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 sm-padding">
                            <div class="footer_widget">
                                <h3>Opening Hours</h3>
                                <ul class="opening_time">
                                    <li>Monday - Friday 11:30am - 2:008pm</li>
                                    <li>Saturday – Monday: 9am – 8pm</li>
                                    <li>Monday - Friday 5:30am - 11:008pm</li>
                                    <li>Saturday - Sunday 4:30am - 1:00pm</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-12 sm-padding">
                            <div class="footer_widget">
                                <h3>Subscribe to our contents</h3>
                                <div class="subscribe_form">
                                    <form action="#" class="subscribe_form">
                                        <input type="email" name="email" id="subs-email" class="form_input" placeholder="Email Address..." />
                                        <button type="submit" class="submit">SUBSCRIBE</button>
                                        <div class="clearfix"></div>
                                        <div id="subscribe-result">
                                            <p class="subscription-success"></p>
                                            <p class="subscription-error"></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}
