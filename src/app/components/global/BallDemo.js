import React from "react";
import AnimateTitle from "./AnimateTitle";

export class BallDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (

            <div>
                <PongBall/>
            </div>

        )
    }
}


class PongBall extends React.Component {

    constructor() {
        super();
        this.state = {
            style: {
                width: '1em',
                height: '1em',
                backgroundColor: 'red',
                position:'absolute',
                top:'10em',
                left:'10em',
            }
        }
    }

    componentDidMount(){

    }

    render() {

        return (

            <div style={{width:'50%',height:'50%'}}>
                <AnimateTitle/>
            </div>

        )
    }
}