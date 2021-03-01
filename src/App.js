import React, { Component } from "react";
import './App.css';
import '@fortawesome/fontawesome-free';
import Sidemenu from "./components/sidemenu";
import Subsidemenu from "./components/subsidemenu";
import Navigation from "./components/navigation";
import Subnavigation from "./components/subnavigation";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Mentor from "./marketResearch/Mentor";
import Information from './marketResearch/information';
import Resources from "./marketResearch/Resources";
import Task from './marketResearch/task';
import Submit from "./marketResearch/Submit";
import Market from "./marketResearch/market";
import Solution from "./marketResearch/solution";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = [{
      person: '',
      information: '',
      task: '',
      Solution: ''
    }];

    
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
                <Switch>
                  <Route path="/market">
                    {/* <Market /> */}
                    <div className="md:w-9/12">
                      <Subnavigation />
                      <div className="sub-right-section">

                        {/* <Switch> */}
                          <Route path="/market/mentor">
                            <Mentor />
                          </Route>
                          <Route path="/market/information">
                            <Information />
                          </Route>
                          <Route path="/market/resources">
                            <Resources />
                          </Route>
                          <Route path="/market/task">
                            <Task />
                          </Route>
                          <Route path="/market/submit">
                            <Submit />
                          </Route>
                        {/* </Switch> */}

                      </div>
                    </div>
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}