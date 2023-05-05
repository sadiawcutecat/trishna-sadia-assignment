// import React from 'react'

import { Outlet } from "react-router-dom";
// import Footer from "../Pages/Shared/Footer/Footer";
// import NavSection from "../Pages/Shared/NavSection";

const Main = () => {
    return (
        <div>
            {/* <NavSection></NavSection> */}
            <Outlet></Outlet>
          
           
        </div>
    );
};

export default Main;