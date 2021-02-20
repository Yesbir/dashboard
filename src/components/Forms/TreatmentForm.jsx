import React from "react";
import { Form, Field } from "react-final-form";

const TreatmentForm = () => {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  return (
    <div
      style={{
        margin: "1rem",
      }}
    >
      <div>
        <h3 className="ui center aligned icon header">
          <i class="circular user md icon"></i>
          Add Treatment
        </h3>
      </div>
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, form }) => (
          <form class="ui form" onSubmit={handleSubmit}>
            <Field name="name">
              {({ input, meta }) => (
                <div class="field">
                  <label>Treatment Name</label>
                  <input type="text" {...input} />
                </div>
              )}
            </Field>
            <Field name="descrition">
              {({ input, meta }) => (
                <div class="field">
                  <label>Description</label>
                  <textarea rows="4" {...input}></textarea>
                </div>
              )}
            </Field>
            <Field name="price">
              {({ input, meta }) => (
                <div class=" field">
                  <label>Item Price</label>
                  <input type="text" placeholder="Price..." {...input} />
                </div>
              )}
            </Field>
            <div style={{ textAlign: "center" }}>
              <button type="submit" className="ui primary button">
                Save
              </button>
              <button type="reset" onClick={form.reset} className="ui button">
                Discard
              </button>
            </div>
          </form>
        )}
      </Form>
    </div>
  );
};

export default TreatmentForm;
