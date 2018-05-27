import React, {Component} from 'react';
import './App.css';
import {
    HashRouter as Router,
    Route,
    Redirect
} from "react-router-dom";

import {Home} from "./app/Home";
import ShowPPT from "./app/components/global/ShowPPT.jsx";
import {BallDemo} from "./app/components/global/BallDemo";
import AnimateTitle from "./app/components/global/AnimateTitle";
import {Welcome} from "./app/components/global/Welcome";
import {ProfileContainer} from "./app/components/profile/ProfileContainer";

class App extends Component {


    render() {

        return (
            <Router>
                <div>
                    <Route exact
                           path={"/"}
                           render={() => <Redirect to={'/welcome'}/>}

                    />
                    <Route path={"/hello"}
                           render={(props) => <Home {...props}  />}
                    />
                    <Route path={"/hello"} component={ShowPPT}/>
                    <Route path={"/ball"} component={BallDemo}/>
                    <Route path={"/a"} component={AnimateTitle}/>
                    <Route path={"/welcome"}
                           render={(props) => <Welcome {...props}  />}
                    />
                    <Route path={"/profile"}
                           render={(props) => <ProfileContainer {...props}  />}

                    />
                </div>
            </Router>
        );
    }
}

export default App;



