import React from "react";
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch } from "react-router-dom";
import AuthScreen from '../views/SignInForm';
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import Footer from "components/Footer/Footer.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";

import routes from "routes.js";

var ps;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      not: false,
      backgroundColor: "black",
      activeColor: "info"
    };
    this.mainPanel = React.createRef();
  }

  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1 && this.state.auth) {
      ps = new PerfectScrollbar(this.mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1 && this.state.auth) {
      ps.destroy();
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH" && this.state.auth) {
      this.mainPanel.current.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }
  handleActiveClick = color => {
    this.setState({ activeColor: color });
  };
  handleBgClick = color => {
    this.setState({ backgroundColor: color });
  };
  render() {
    // דילוג על האוטנטיקציה! ! ! ! תשמי כזה לא לשכוח ! 
    if (this.state.auth) {
      return (
        <div className="wrapper">
          <Sidebar
            {...this.props}
            routes={routes}
            bgColor={this.state.backgroundColor}
            activeColor={this.state.activeColor}
          />
          <div className="main-panel" ref={this.mainPanel}>
            <DemoNavbar {...this.props} />
            <Switch>
              {routes.map((prop, key) => {
                return (
                  <Route
                    path={prop.layout + prop.path}
                    component={prop.component}
                    key={key}
                  />
                  );
              })}
            </Switch>
            <Footer fluid />
          </div>
        </div>
      );
    } else { 
      return (
        <AuthScreen switchToDashboard={() => this.setState({...this.state, auth: true})} />
      )
    } 
  }
}

export default Dashboard;
