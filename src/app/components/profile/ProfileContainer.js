import React from "react";
import {ProfileMenu} from "./ProfileMenu";

export class ProfileContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {

        return (

            <div>
                <ProfileMenu/>
                <div style={{height: "10000px"}}>

                </div>
            </div>

        )
    }
}

