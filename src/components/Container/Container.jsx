import React from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import CenteredTabs from "../Tabs/CenteredTab";
import CustomizedTables from "../Tables/Table";
import CenteredGrid from "../Grid/CenteredGrid";
import JumboButton from "../JumboButton/JumboButton";
import { changeHeading } from "../../actions/tableAction";
import { Typography } from "@material-ui/core";
import BarCharts from "../Charts/BarChart";
import {
  headings,
  headings1,
  headings2,
  headings3,
  rows,
  rows1,
  rows2,
  rows3,
  todaysData,
} from "../../db";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    paddingLeft: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 300,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 75,
  },
}));

function SimpleContainer(props) {
  const tabs = ["Today's Task", "Clinical Stats"];
  const classes = useStyles();
  const [activeTab, setActiveTab] = React.useState(tabs[0]);
  const changeActiveTab = (index) => {
    setActiveTab(tabs[index]);
  };

  const headingArray = ["APPOINTMENTS", "PATIENTS", "INCOME", "EXPENSES"];

  const renderTable = () => {
    const i = headingArray.indexOf(props.heading);

    if (i === 0) {
      return (
        <CustomizedTables
          title={headingArray[i]}
          headings={headings}
          rows={rows}
        />
      );
    }
    if (i === 1) {
      return (
        <CustomizedTables
          title={headingArray[i]}
          headings={headings1}
          rows={rows1}
        />
      );
    }
    if (i === 2) {
      return (
        <CustomizedTables
          title={headingArray[i]}
          headings={headings2}
          rows={rows2}
        />
      );
    }
    if (i === 3) {
      return (
        <CustomizedTables
          title={headingArray[i]}
          headings={headings3}
          rows={rows3}
        />
      );
    }
  };

  const renderTodaysTask = () => {
    return (
      <div>
        <JumboButton count={4} width={3} data={todaysData} showBox={true} />

        <CenteredGrid />

        <CssBaseline />
        {renderTable()}
      </div>
    );
  };
  const renderClinicalStats = () => {
    return (
      <div>
        <div style={{ paddingTop: "10px" }}>
          <Typography display="initial" variant="h3">
            Clinical Stats
          </Typography>
        </div>
        <div style={{ paddingTop: "10px" }}>
          <JumboButton
            count={4}
            width={6}
            data={todaysData}
            arrowIcon={true}
          ></JumboButton>
        </div>

        <div style={{ paddingTop: "30px" }}>
          <Typography display="initial" variant="h4">
            New Patient Entry [ Per Day ]
          </Typography>
          <div style={{ paddingTop: "20px" }}>
            <BarCharts />
          </div>
        </div>
        <Divider />
        <div style={{ paddingTop: "30px" }}>
          <Typography display="initial" variant="h4">
            Number Of Patients Treated Per Day [ Derived From Session Reporting
            ]
          </Typography>
          <div style={{ paddingTop: "20px" }}>
            <BarCharts />
          </div>
        </div>
        <Divider />
        <div style={{ paddingTop: "30px" }}>
          <Typography display="initial" variant="h4">
            Income Analytics [ Only For Month Wise ]
          </Typography>
          <div style={{ paddingTop: "20px" }}>
            <BarCharts />
          </div>
        </div>
        <Divider />
        <div style={{ paddingTop: "30px" }}>
          <Typography display="initial" variant="h4">
            Conditions Analytics [ Only For Month Wise ]
          </Typography>
          <div style={{ paddingTop: "20px" }}>
            <BarCharts />
          </div>
        </div>
        <Divider />
        <div style={{ paddingTop: "30px" }}>
          <Typography display="initial" variant="h4">
            Appointment Analytics
          </Typography>
          <div style={{ paddingTop: "20px" }}>
            <BarCharts />
          </div>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      <CssBaseline />

      <Container
        maxWidth="lg"
        className={clsx(classes.content, {
          [classes.contentShift]: !props.isOpen,
        })}
      >
        <CenteredTabs headings={tabs} changeActiveTab={changeActiveTab} />
        {activeTab === tabs[0] ? renderTodaysTask() : renderClinicalStats()}
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    isOpen: state.sideBarState,
    heading: state.tableHeading,
  };
};

export default connect(mapStateToProps)(SimpleContainer);
