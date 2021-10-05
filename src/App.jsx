import React, { Component } from "react";
import Header from "./components/header";
import Navigation from "./components/navigation";
import Features from "./components/features";
import About from "./components/about";
import Contact from "./components/contact";
import JsonData from "./data/data.json";
import Privacy from "./components/Privacy";
import { BrowserRouter as Router, Route } from "react-router-dom";
export class App extends Component {
  state = {
    landingPageData: {},
  };
  getlandingPageData() {
    this.setState({ landingPageData: JsonData });
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <About data={this.state.landingPageData.About} />
        <Features data={this.state.landingPageData.Features} />
        <Contact data={this.state.landingPageData.Contact} />
        <Router>
          <Route path="/privacy" component={Privacy} />
        </Router>
      </div>
    );
  }
}

export default App;
