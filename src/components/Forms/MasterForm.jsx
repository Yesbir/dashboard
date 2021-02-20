import React from "react";
import CenteredTab from "../Tabs/CenteredTab";
import Table from "../Tables/Table";
import { IconButton } from "@material-ui/core";
import { Form, Field } from "react-final-form";

const masterTabData = [
  "Treatment Item",
  "Expense Item",
  "Provisional Diagnosis",
];
const rescheduleIcon = (
  <div>
    <IconButton>
      <i aria-label="rescedule" class="fas fa-marker"></i>
    </IconButton>
  </div>
);

const deleteIcon = (
  <div>
    <IconButton>
      <div>
        <i class="fas fa-trash"></i>
      </div>
    </IconButton>
  </div>
);

const masterListTableTreatmentData = [
  {
    name: "Anurag",
    description: "Description",
    price: "₹60",
    rescheduleIcon,
    deleteIcon,
  },
];

const masterListTableExpenseData = [
  {
    name: "Joy",
    description: "Description",
    price: "₹20",
    rescheduleIcon,
    deleteIcon,
  },
];

const masterListTableDiagnosisData = [
  {
    date: "07/02/2021",
    name: "Ashu",
    rescheduleIcon,
    deleteIcon,
  },
];
let headingData = [];
let rowData = [];

const masterListTableDiagnosisHeading = [
  "Date",
  "Name",
  "Reschedule",
  "Delete",
];

const masterListTableHeading = [
  "Name",
  "Description",
  "Price ",
  "Reschedule",
  "Delete",
];
// const masterListTableData = [
//   {
//     name: "Anurag",
//     description: "Description",
//     price: "Price",
//     action,
//   },
// ];

function MasterForm({ open }) {
  const [currentTab, setcurrentTab] = React.useState(0);
  const changeCurrentTab = (index) => {
    setcurrentTab(index);
  };

  const onSubmitTreatmentItem = (formValues) => {
    console.log("treatment", formValues);
  };

  const renderTreatmentItem = () => (
    <div>
      <Form onSubmit={onSubmitTreatmentItem}>
        {({ handleSubmit, form }) => (
          <form className="ui form" onSubmit={handleSubmit}>
            <Field name="itemName">
              {({ input, meta }) => (
                <div className="field">
                  <label>Item Name</label>
                  <input
                    type="text"
                    name="first-name"
                    placeholder="Item Name"
                    {...input}
                  />
                </div>
              )}
            </Field>
            <Field name="description">
              {({ input }) => (
                <div className="field">
                  <label>Description</label>
                  <textarea rows="2" {...input}></textarea>
                </div>
              )}
            </Field>
            <Field name="itemPrice">
              {({ input, meta }) => (
                <div className="field">
                  <label>Item Price</label>
                  <input
                    type="text"
                    {...input}
                    name="first-name"
                    placeholder="Item Price"
                  />
                </div>
              )}
            </Field>

            <div style={{ textAlign: "center" }}>
              <button className="ui primary button" type="submit">
                Save
              </button>
              <button className="ui button" type="reset" onClick={form.reset}>
                Discard
              </button>
            </div>
          </form>
        )}
      </Form>
    </div>
  );

  const onDiagnosisSubmit = (formValues) => {
    console.log("diagnosis", formValues);
  };

  const renderDiagnosis = () => (
    <div>
      <Form onSubmit={onDiagnosisSubmit}>
        {({ handleSubmit, form }) => (
          <form class="ui form" onSubmit={handleSubmit}>
            <Field name="diagnosisName">
              {({ input, meta }) => (
                <div class="field">
                  <label>Diagnosis Name</label>
                  <input
                    type="text"
                    name="first-name"
                    placeholder="Diagnosis Name"
                    {...input}
                  />
                </div>
              )}
            </Field>
            <div style={{ textAlign: "center" }}>
              <button className="ui primary button">Save</button>
              <button className="ui button" type="reset" onClick={form.reset}>
                Discard
              </button>
            </div>
          </form>
        )}
      </Form>
    </div>
  );
  const onExpenseSubmit = (formValues) => {
    console.log("expenseForm", formValues);
  };
  const renderExpenseItem = () => (
    <div>
      <Form onSubmit={onExpenseSubmit}>
        {({ handleSubmit, form }) => (
          <form class="ui form" onSubmit={handleSubmit}>
            <Field name="itemName">
              {({ input, meta }) => (
                <div class="field">
                  <label>Item Name</label>
                  <input
                    type="text"
                    name="first-name"
                    placeholder="Item Name"
                    {...input}
                  />
                </div>
              )}
            </Field>
            <Field name="description">
              {({ input, meta }) => (
                <div class="field">
                  <label>Description</label>
                  <textarea rows="2" {...input}></textarea>
                </div>
              )}
            </Field>
            <Field name="itemPrice">
              {({ input, meta }) => (
                <div class="field">
                  <label>Item Price</label>
                  <input
                    type="text"
                    name="first-name"
                    placeholder="Item Price"
                    {...input}
                  />
                </div>
              )}
            </Field>
            <div style={{ textAlign: "center" }}>
              <button className="ui primary button" type="submit">
                Save
              </button>
              <button className="ui button" type="reset" onClick={form.reset}>
                Discard
              </button>
            </div>
          </form>
        )}
      </Form>
    </div>
  );

  const renderCenterData = () => {
    if (currentTab === 0) {
      headingData = masterListTableHeading;
      rowData = masterListTableTreatmentData;
      return renderTreatmentItem();
    } else if (currentTab === 1) {
      headingData = masterListTableHeading;
      rowData = masterListTableExpenseData;
      return renderExpenseItem();
    } else {
      headingData = masterListTableDiagnosisHeading;
      rowData = masterListTableDiagnosisData;
      return renderDiagnosis();
    }
  };

  const renderTable = () => {
    return <Table headings={headingData} rows={rowData} disableIcon={true} />;
  };

  const renderForm = () => {
    return (
      <div>
        <CenteredTab
          headings={masterTabData}
          changeActiveTab={changeCurrentTab}
        />
        <div>{renderCenterData()}</div>

        <div style={{ marginTop: "20px" }}>{renderTable()}</div>
      </div>
    );
  };

  return open ? renderForm() : null;
}

export default MasterForm;
