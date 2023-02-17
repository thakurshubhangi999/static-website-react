import React from "react";

function Footer(props) {
    console.log(props)
    return (
        <div className="card">
            <img src={props.img} className="card-image1" alt="img1" />
            <div className="card-stats">
                <img src="images/star.png" className="card-star" alt="img" />
                <span>{props.rate}</span>
                <span className="gray">({props.rate1}) . </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.desc}</p>
            <p><span className="bold">From ${props.price} </span>/ Person</p>
        </div>
    );
}
export default Footer