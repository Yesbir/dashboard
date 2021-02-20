import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Form, Field } from "react-final-form";

const AddPatients = (props) => {
  const onSubmit = (formValues) => {
    console.log(formValues);
    props.closeForm();
  };

  const RadioComponent = ({ input }) => <Radio {...input} />;

  return (
    <div style={{ margin: "1rem" }}>
      <div>
        <h3 className="ui center aligned icon header">
          <i class="circular wheelchair icon"></i>
          Add Patient
        </h3>
      </div>
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, form }) => (
          <form class="ui form" onSubmit={handleSubmit}>
            <Field name="name">
              {({ input, meta }) => (
                <div class="field">
                  <label>Patient Name </label>
                  <input type="text" placeholder="Enter Name" {...input} />
                </div>
              )}
            </Field>

            <div class="field">
              <label>Patient Type *</label>
              <RadioGroup row>
                <FormControlLabel
                  label="OP Patient"
                  control={
                    <Field
                      name="patient"
                      component={RadioComponent}
                      type="radio"
                      value="op"
                    />
                  }
                />
                <FormControlLabel
                  label="Home Patient"
                  control={
                    <Field
                      name="patient"
                      component={RadioComponent}
                      type="radio"
                      value="home"
                    />
                  }
                />
              </RadioGroup>
            </div>

            <div class="field">
              <label>Gender </label>
              <RadioGroup row>
                <FormControlLabel
                  label="Male"
                  control={
                    <Field
                      name="gender"
                      component={RadioComponent}
                      type="radio"
                      value="male"
                    />
                  }
                />
                <FormControlLabel
                  label="Female"
                  control={
                    <Field
                      name="gender"
                      component={RadioComponent}
                      type="radio"
                      value="female"
                    />
                  }
                />
              </RadioGroup>
            </div>

            <Field name="name">
              {({ input, meta }) => (
                <div class="field">
                  <label>Mobile Number </label>
                  <input
                    type="text"
                    placeholder="Enter Mobile no."
                    {...input}
                  />
                </div>
              )}
            </Field>

            <Field name="name">
              {({ input, meta }) => (
                <div class="field">
                  <label>Email</label>
                  <input type="text" placeholder="Enter Email" {...input} />
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

export default AddPatients;
