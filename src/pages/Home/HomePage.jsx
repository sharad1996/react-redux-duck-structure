import React from 'react';
import { Helmet } from "react-helmet";
import Aux from "../sharedComponents/Aux";
import Navigation from "./Navigation";
import './style.scss'

const HomePage = () => (
    <Aux>
        <Helmet><title>Run My Business | Stuff</title></Helmet>
        <Navigation />
        <div className="page-content-wrapper">

        </div>
    </Aux>

)

export default HomePage;