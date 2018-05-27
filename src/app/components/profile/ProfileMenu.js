import React from "react";
import {Menu} from 'semantic-ui-react'


export class ProfileMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    state = {activeItem: 'home'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state

        return (

            <Menu pointing secondary color={"pink"}  fixed={"top"} size={"massive"}>
                <Menu.Item>
                    <img src='/favicon.ico' alt={"Rocky"} style={{height:"30px",width:"30px"}}/>
                </Menu.Item>

                <Menu.Item
                    name='Back'
                    active={activeItem === 'Back'}
                    onClick={this.handleItemClick}
                >
                    Rocky Chen ^ _ ^
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
                    <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick}/>
                    <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick}/>
                </Menu.Menu>
            </Menu>

        )
    }
}

