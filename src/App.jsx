import React, { useEffect } from "react";
import "./assets/css/bootstrap-theme.css";
import "./assets/css/bootstrap.css";
import "./assets/css/carousel.css";
import "./assets/css/carousel-product.css";
import "./assets/css/custom.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./navigations/PrivateRoute";
import { Layout, ScrollToTop } from "./commons";
import { Home, Shop, Product, Contact } from "./pages";

const App = (props) => {
    return (
        <Router>
            <Layout>
                <ScrollToTop />
                <Switch>
                    <Route component={Home} path="/" exact />
                    <Route component={Shop} path="/product" exact />
                    <Route component={Contact} path="/contact" exact />
                    <Route component={Product} path="/product/:id" />
                </Switch>
            </Layout>
        </Router>
    );
};

export default App;
