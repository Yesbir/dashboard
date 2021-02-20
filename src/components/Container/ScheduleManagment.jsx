import React from "react";
import BasicContainer from "./BasicContainer";
import AppointmentTable from "../Tables/AppointmentTable";
import CenteredTabs from "../Tabs/CenteredTab";
import {
  appointmentsTableData,
  missedAppointmentsTableData,
  cancelledAppointmentsTableData,
  appointmentsTableHeading,
  missedAppointmentsTableHeadings,
  cancelledAppointmentsTableHeadings,
} from "../../db";

const ScheduleManagment = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const headings = [
    "Appointments",
    "Missed Appointments",
    "Cancelled Appointments",
  ];

  let tableHeading = [];
  let tableData = [];
  if (activeTab === 0) {
    tableHeading = appointmentsTableHeading;
    tableData = appointmentsTableData;
  }
  if (activeTab === 1) {
    tableHeading = missedAppointmentsTableHeadings;
    tableData = missedAppointmentsTableData;
  }
  if (activeTab === 2) {
    tableHeading = cancelledAppointmentsTableHeadings;
    tableData = cancelledAppointmentsTableData;
  }

  const renderTable = () => {
    return <AppointmentTable headings={tableHeading} rows={tableData} />;
  };

  return (
    <BasicContainer>
      <CenteredTabs headings={headings} changeActiveTab={setActiveTab} />
      <div>{renderTable()}</div>
    </BasicContainer>
  );
};

export default ScheduleManagment;
