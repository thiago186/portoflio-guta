import React from "react";
import Navbar from "../../components/Navbar";

import "./HomePage.css";

function HomePage() {
    return (
        <div className="homepage-wrapper">
            <Navbar />
            <div className="homepage-icon-container">
                <img src="/guta.svg" alt="Guta Icon" />
            </div>
        </div>
    )
}
export default HomePage;