import React, {Component} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

import {Home} from "./app/Home";
import ShowPPT from "./app/components/global/ShowPPT.jsx";
import {BallDemo} from "./app/components/global/BallDemo";
import AnimateTitle from "./app/components/global/AnimateTitle";

class App extends Component {


    render() {
        return (
            <Router>
                <div>
                    <Route exact
                           path={"/"}
                           render={(props) => <Home {...props}  />}

                    />
                    <Route path={"/hello"} component={ShowPPT}/>
                    <Route path={"/ball"} component={BallDemo}/>
                    <Route path={"/a"} component={AnimateTitle}/>
                </div>
            </Router>
        );
    }
}

export default App;
