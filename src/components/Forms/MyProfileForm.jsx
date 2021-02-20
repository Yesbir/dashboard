import React from "react";
import { Form, Field } from "react-final-form";

function MyProfileForm({ open }) {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  const renderForm = () => {
    return (
      <div>
        <div>
          <Form onSubmit={onSubmit}>
            {({ handleSubmit, form }) => (
              <form className="ui form" onSubmit={handleSubmit}>
                <Field name="name">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>First Name</label>
                      <input type="text" {...input} placeholder="First Name" />
                    </div>
                  )}
                </Field>
                <Field name="lastName">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Last Name</label>
                      <input type="text" {...input} placeholder="Last Name" />
                    </div>
                  )}
                </Field>
                <Field name="branchName">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Branch Name</label>
                      <input type="text" {...input} placeholder="Branch Name" />
                    </div>
                  )}
                </Field>
                <Field name="clinicName">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Clinic Name</label>
                      <input type="text" {...input} placeholder="Clinic Name" />
                    </div>
                  )}
                </Field>
                <Field name="email">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Email</label>
                      <input
                        type="text"
                        {...input}
                        placeholder="Email"
                        readOnly
                      />
                    </div>
                  )}
                </Field>
                <Field name="mobileNumber">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Mobile Number</label>
                      <input
                        type="text"
                        {...input}
                        placeholder="Mobile Number"
                      />
                    </div>
                  )}
                </Field>
                <Field name="phoneNumber">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Phone Number</label>
                      <input
                        type="text"
                        {...input}
                        placeholder="Phone Number"
                      />
                    </div>
                  )}
                </Field>
                <Field name="backDetails">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Bank Details</label>
                      <textarea rows="2" {...input} />
                    </div>
                  )}
                </Field>
                <div style={{ textAlign: "center" }}>
                  <button className="ui primary button">Save</button>
                  <button
                    className="ui button"
                    type="reset"
                    onClick={form.reset}
                  >
                    Discard
                  </button>
                </div>
              </form>
            )}
          </Form>
        </div>
      </div>
    );
  };

  return open ? renderForm() : null;
}

export default MyProfileForm;
