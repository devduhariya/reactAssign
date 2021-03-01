import React, { Component } from "react";
import './App.css';
import '@fortawesome/fontawesome-free';
import Sidemenu from "./components/sidemenu";
import Subsidemenu from "./components/subsidemenu";
import Navigation from "./components/navigation";
import Subnavigation from "./components/subnavigation";
import { Route, Router, Switch } from "react-router-dom";
import Mentor from "./marketResearch/Mentor";
export default class start extends Component {
    constructor(props) {
        super(props);
        this.state = [{
            person: '',
            information: '',
            task: '',
            Solution: ''
        }];
    }
    updateMentor() {
        this.setState({
            person: '/assets/img/person.jpg'
        });
    }
    updateInformation() {

    }
    render() {
        return (
            <Router>
                <div className="md:w-11/12 m-auto width-100%">
                    <div className="flex flex-wrap py-2">
                        <div className="w-full px-4 w-full md:w-2/12">
                            <Sidemenu />
                        </div>
                        <div className="w-full right-container px-4 md:w-10/12">
                            <Navigation />
                            <hr />
                            <div className="flex">
                                <div className="details w-full px-4 w-full md:w-3/12">
                                    <Subsidemenu />
                                </div>

                                <div className="md:w-9/12">
                                    <Subnavigation />

                                    <Switch>
                                        <Route path="/">
                                            <Mentor />
                                        </Route>
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}