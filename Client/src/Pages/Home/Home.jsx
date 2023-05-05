// import React from 'react';

import Cards from "../Cards/Cards";
import ExtraOne from "../Extra section/ExtraOne";
import ExtraSecond from "../Extra section/ExtraSecond";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Cards></Cards>
             <ExtraOne></ExtraOne>
            <ExtraSecond></ExtraSecond> 
            <Footer></Footer>
        </div>
    );
};

export default Home;