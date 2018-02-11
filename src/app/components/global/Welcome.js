import React from "react";
import "../../asset/css/welcomeStyle.css";
import AnimateTitle from "./AnimateTitle"

const containerStyle = {
    height: "200px",
    width: "400px",
    background: "transparent",
    position: "absolute",
    zIndex: 400
}

export class Welcome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (

            <div className="sky-container">
                <div className="wrapper">
                    <div className="sky">
                        <div style={containerStyle}>
                            <AnimateTitle animateClass={"stWhite"}/>
                        </div>

                        <div className="cloud fcloud01"></div>
                        <div className="cloud fcloud02"></div>
                        <div className="cloud fcloud03"></div>
                        <div className="earth"></div>
                        <div className="card">
                            <div className="welcome-ufo"></div>
                            <button className="welcome-button">welcome</button>
                        </div>
                        <div className="superman"></div>
                    </div>
                </div>
            </div>

        )
    }
}

