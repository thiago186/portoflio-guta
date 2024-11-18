import React from "react";
import Navbar from "../../components/Navbar";

import "./HomePage.css";

function HomePage() {
    const theme='light';
    console.log(theme);

    return (
        <div className="homepage-wrapper">
            <Navbar theme={theme}/>
            <div className="homepage-icon-container">
                <img src="/guta.svg" alt="Guta Icon" />
            </div>
        </div>
    )
}
export default HomePage;