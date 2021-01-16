import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { CartModal } from "../components";

export const Layout = (props) => {
    return (
        <React.Fragment>
            <CartModal/>
            <Header />
            {props.children}
            <Footer />
        </React.Fragment>
    );
};
