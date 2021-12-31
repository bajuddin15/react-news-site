import React, { Component } from "react";
import Navbar from "./component/Navbar";
import "./App.css";
import News from "./component/News";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
// import LoadingBar from "react-top-loading-bar";

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     progress: 0,
  //   };
  // }

  render() {
    return (
      <>
        <Router>
          <div className="b">
            <Navbar />
          </div>

          {/* <div className="container">
            <News setProgress={this.setProgress} pageSize={9} country="in" category="health" />
          </div> */}

          <Switch>
            <Route path="/" exact>
              <div className="container">
                <News
                  setProgress={this.setProgress}
                  key="general"
                  pageSize={9}
                  country="in"
                  category="general"
                />
              </div>
            </Route>
            <Route path="/business">
              <div className="container">
                <News
                  setProgress={this.setProgress}
                  key="business"
                  pageSize={9}
                  country="in"
                  category="business"
                />
              </div>
            </Route>
            <Route path="/entertainment">
              <div className="container">
                <News
                  setProgress={this.setProgress}
                  key="entertainment"
                  pageSize={9}
                  country="in"
                  category="entertainment"
                />
              </div>
            </Route>
            <Route path="/general">
              <div className="container">
                <News
                  setProgress={this.setProgress}
                  key="general"
                  pageSize={9}
                  country="in"
                  category="general"
                />
              </div>
            </Route>
            <Route path="/health">
              <div className="container">
                <News
                  setProgress={this.setProgress}
                  key="health"
                  pageSize={9}
                  country="in"
                  category="health"
                />
              </div>
            </Route>
            <Route path="/science">
              <div className="container">
                <News
                  setProgress={this.setProgress}
                  key="science"
                  pageSize={9}
                  country="in"
                  category="science"
                />
              </div>
            </Route>
            <Route path="/sports">
              <div className="container">
                <News
                  setProgress={this.setProgress}
                  key="sports"
                  pageSize={9}
                  country="in"
                  category="sports"
                />
              </div>
            </Route>
            <Route path="/technology">
              <div className="container">
                <News
                  setProgress={this.setProgress}
                  key="technology"
                  pageSize={9}
                  country="in"
                  category="technology"
                />
              </div>
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
