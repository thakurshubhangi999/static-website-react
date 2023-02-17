import React from "react";
import logo from "./airbnb 1.png";
console.log(logo)

function Image() {
    return (
        <nav>
            <img src={logo} className="nav-logo" alt="" />;
        </nav>
    );
}
export default Image