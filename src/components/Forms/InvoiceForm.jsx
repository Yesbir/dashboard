import React from "react";
import { Form, Field } from "react-final-form";

function InvoiceForm({ open }) {
  const onInvoiceSubmit = (formValues) => {
    console.log(formValues);
  };
  const onGunnaSubmit = (formValues) => {
    console.log(formValues);
  };

  const renderForm = () => {
    return (
      <div>
        <Form onSubmit={onInvoiceSubmit}>
          {({ handleSubmit, form }) => (
            <form onSubmit={handleSubmit}>
              <div className="ui form">
                <h3 class="ui dividing header">Invoice Settings</h3>

                <Field name="header">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Header</label>
                      <input {...input}></input>
                    </div>
                  )}
                </Field>
                <Field name="termsAndCondition">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Terms and Condition</label>
                      <textarea rows="4" {...input}></textarea>
                    </div>
                  )}
                </Field>
                <Field name="notes">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Notes</label>
                      <input type="text" {...input} />
                    </div>
                  )}
                </Field>
                <Field name="footer">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Footer</label>
                      <input type="text" />
                    </div>
                  )}
                </Field>
                <div style={{ textAlign: "center" }}>
                  <button type="submit" className="ui primary button">
                    Save
                  </button>
                  <button
                    type="reset"
                    onClick={form.reset}
                    className="ui button"
                  >
                    Discard
                  </button>
                </div>
              </div>
            </form>
          )}
        </Form>
        <Form onSubmit={onGunnaSubmit}>
          {({ handleSubmit, form }) => (
            <form onSubmit={handleSubmit}>
              <div className="ui form">
                <h3 class="ui dividing header">General Settings</h3>
                <Field name="discount">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Discount (%)</label>
                      <input type="text" {...input} />
                    </div>
                  )}
                </Field>
                <Field name="tax">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Tax (%)</label>
                      <input type="text" {...input} />
                    </div>
                  )}
                </Field>
                <div style={{ textAlign: "center" }}>
                  <button type="submit" className="ui primary button">
                    Save
                  </button>
                  <button
                    type="reset"
                    onClick={form.reset}
                    className="ui button"
                  >
                    Discard
                  </button>
                </div>
              </div>
            </form>
          )}
        </Form>
      </div>
    );
  };

  return open ? renderForm() : null;
}

export default InvoiceForm;
