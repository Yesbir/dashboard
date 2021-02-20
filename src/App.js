import React, { Component } from "react";
import NavBar from "./components/NavBar";

import { connect } from "react-redux";
import { closeSideBar, closeDropDown } from "./actions/sideBarAction";
import LeftSideBar from "./components/SideBar/Left";
import DashboardContainer from "./components/Container/Container";
import SettingContainer from "./components/Container/SettingContainer";
import ScheduleContainer from "./components/Container/ScheduleManagment";
import TopDrawer from "./components/SideBar/TopDrawer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HistoryIcon from "@material-ui/icons/History";
import { walletData } from "./db";
import AddApointment from "./components/Container/AddApointmentContainer";

class App extends Component {
  state = { isOpenDialog: false, popup: false };

  closeSideBarHandler = () => {
    if (this.props.isDrawerOpen) {
      if (this.props.isDropDownOpen) this.props.closeDropDown();
      this.props.closeSideBar();
    }
  };
  setpopup = (value) => {
    console.log(value);
    this.setState({ popup: value });
  };

  onBodyClick = () => {
    if (this.state.popup) this.setState({ popup: false });
  };

  walletPopup = () => {
    if (this.state.popup)
      return (
        <div
          class="ui cards"
          style={{
            position: "absolute",
            zIndex: "5",
            marginTop: "-50px",
            marginLeft: "80%",
            marginBottom: "-65px",
          }}
        >
          <div className="card">
            <div className="content">
              <div className="header">Amount: ₹ {walletData.balance}</div>
              <div
                className="description"
                style={{
                  backgroundColor: "rgb(200,200,200)",
                  cursor: "pointer",
                  padding: "5px",
                }}
              >
                <HistoryIcon /> Transaction History
              </div>
            </div>
            <div className="ui bottom attached button">
              {walletData.remainingDays} days Remaining
            </div>
          </div>
        </div>
      );
    else return undefined;
  };
  render() {
    return (
      <div onClick={this.onBodyClick}>
        <BrowserRouter>
          <div onClick={this.closeSideBarHandler}>
            <NavBar
              setWalletDialog={this.setWalletDialog}
              setPopup={this.setpopup}
            />
            {this.walletPopup()}

            <TopDrawer />
          </div>
          <Switch>
            <Route exact path="/" component={DashboardContainer} />
            <Route path="/settings" component={SettingContainer} />
            <Route
              path="/appointmentmanagement"
              component={ScheduleContainer}
            />
            <Route path="/add-appointment" component={AddApointment} />
          </Switch>
          <LeftSideBar />
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDrawerOpen: state.sideBarState,
    isDropDownOpen: state.dropDownState,
  };
};

export default connect(mapStateToProps, { closeSideBar, closeDropDown })(App);
