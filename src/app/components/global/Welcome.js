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

    goToProfile() {
        //profile
        //const {history} = this.props;
        //history.push("/profile");
        //window.location.href();
        window.open("http://rockychencv.s3-website-us-west-1.amazonaws.com/", '_blank');
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
                            <button className="welcome-button"
                                    onClick={() => this.goToProfile()}>
                                welcome
                            </button>
                        </div>
                        <div className="superman"></div>
                    </div>
                </div>
            </div>

        )
    }
}

