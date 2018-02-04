import React from "react";
import {Container, List} from 'semantic-ui-react';
import {
    Link,
} from "react-router-dom";

export class Home extends React.Component {


    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <div style={{padding: "1%"}}>
                <Container>
                    <List divided relaxed size='huge'>
                        <List.Item>
                            <List.Icon name='list layout' size='large' verticalAlign='middle'/>
                            <List.Content>
                                <List.Header><Link to='/hello'>Hello</Link></List.Header>
                                <List.Description as='a'>Hello world sub page</List.Description>
                            </List.Content>
                        </List.Item>

                        <List.Item>
                            <List.Icon name='list layout' size='large' verticalAlign='middle'/>
                            <List.Content>
                                <List.Header><Link to='/ball'>Ball Demo</Link></List.Header>
                                <List.Description as='a'>Ball Demo sub page</List.Description>
                            </List.Content>
                        </List.Item>
                    </List>
                </Container>
            </div>


        )
    }
}
