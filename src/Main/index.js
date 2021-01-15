import React, { Component } from "react";
import { HashRouter, Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import AppBar from '../components/Navbar/index';
import Repos from '../Repos/index';
import Home from '../Home/index';
import Resume from '../Resume/index';
import Footer from "../components/Navbar/footer";

export default class Main extends Component{
    render() {
        return (
            <div>
                {/* <AppBar /> */}
                <HashRouter basename='/'>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/repos" component={Repos} />
                            <Route exact path="/resume" component={Resume} />
                        </Switch>
                    </Router>
                </HashRouter>
                {/* <Footer /> */}
            </div>
        );
    }
}

