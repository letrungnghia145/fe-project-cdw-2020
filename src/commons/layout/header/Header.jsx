import React, { useState } from "react";
import "./header.css";
import {
    LoginModal,
    RegistrationModal,
    ForgotPasswordModal,
} from "../../components";
import { NavLink } from 'react-router-dom';
import { CustomNavLink } from "../../components";

export const Header = () => {
    const [Modal, showModal] = useState(null);
    return (
        <React.Fragment>
            {Modal}
            <header>
                <div className="toplinks">
                    <a
                        href="#signin"
                        onClick={(e) => {
                            e.preventDefault();
                            showModal(
                                <RegistrationModal callback={showModal} />
                            );
                        }}
                    >
                        <i className="fa fa-user" aria-hidden="true"></i>{" "}
                        Registration
                    </a>
                    <a
                        href="#signin"
                        onClick={(e) => {
                            e.preventDefault();
                            showModal(
                                <LoginModal
                                    callback={(modal) => showModal(modal)}
                                />
                            );
                        }}
                    >
                        <i className="fa fa-unlock-alt" aria-hidden="true"></i>{" "}
                        Sign In
                    </a>
                    {/* <a href="./favorites/">
                        {" "}
                        <i className="ion-ios-heart" /> Favorites{" "}
                    </a> */}
                    <a href="tel:+80005554465" className="hidden-xs">
                        <i className="fa fa-phone" aria-hidden="true"></i> 8000
                        555-44-65{" "}
                    </a>
                </div>
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <button
                                type="button"
                                className="navbar-toggle collapsed"
                                data-toggle="collapse"
                                data-target="#navbar"
                                aria-expanded="false"
                                aria-controls="navbar"
                            >
                                <span className="sr-only">
                                    Toggle navigation
                                </span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <NavLink className="navbar-brand" to="/">
                                {" "}
                                Unistore Pro{" "}
                            </NavLink>
                            <a
                                className="navbar-brand pull-right hidden-sm hidden-md hidden-lg"
                                href="#open-cart"
                            >
                                {" "}
                                <i className="ion-bag" /> 7{" "}
                            </a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <CustomNavLink to="/" label="Home" activeOnlyWhenExact="true"/>
                                <CustomNavLink to="/product" label="Products"/>
                                <CustomNavLink to="/blog" label="Blog" activeOnlyWhenExact="true"/>
                                <CustomNavLink to="/contact" label="Contact" activeOnlyWhenExact="true"/>
                                {/* Drop down */}
                                {/* <li className="dropdown">
                                <a
                                    href="./store/"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    More{" "}
                                    <i className="ion-android-arrow-dropdown" />
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="./store/product.html">
                                            Product
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./about/">About Us</a>
                                    </li>
                                    <li>
                                        <a href="./checkout/">Checkout</a>
                                    </li>
                                    <li>
                                        <a href="./faq/">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="./gallery/">Gallery</a>
                                    </li>
                                    <li role="separator" className="divider" />
                                    <li className="dropdown-header">
                                        Variations
                                    </li>
                                    <li>
                                        <a href="./blog/item-photo.html">
                                            Article Photo
                                        </a>
                                    </li>
                                    <li>
                                        <a href="./blog/item-video.html">
                                            Article Video
                                        </a>
                                    </li>
                                </ul>
                            </li> */}
                            </ul>
                        </div>
                        {/*/.nav-collapse */}
                        <div className="search hidden-xs" data-style="hidden">
                            <div className="input">
                                <button type="button">
                                    <i className="ion-ios-search" />
                                </button>
                                <input
                                    type="text"
                                    name="search"
                                    defaultValue
                                    placeholder="Type here..."
                                />
                            </div>
                        </div>
                    </div>
                    {/*/.container-fluid */}
                </nav>
            </header>
        </React.Fragment>
    );
};
