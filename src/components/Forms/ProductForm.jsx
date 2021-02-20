import React from "react";
import { Form, Field } from "react-final-form";

function ProductForm({ open }) {
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
                      <label>Item Name</label>
                      <input type="text" {...input} placeholder="Item Name" />
                    </div>
                  )}
                </Field>
                <Field name="itemCode">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Item Code</label>
                      <input type="text" {...input} placeholder="Item Code" />
                    </div>
                  )}
                </Field>
                <Field name="noOfItems">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>No. of Items</label>
                      <input
                        type="text"
                        {...input}
                        placeholder="No. of Items"
                      />
                    </div>
                  )}
                </Field>
                <Field name="amount">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Amount</label>
                      <input
                        type="text"
                        {...input}
                        name="amount"
                        placeholder="Amount"
                      />
                    </div>
                  )}
                </Field>
                <Field name="discount">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Discount</label>
                      <input type="text" {...input} placeholder="Discount" />
                    </div>
                  )}
                </Field>
                <Field name="total">
                  {({ input, meta }) => (
                    <div className="field">
                      <label>Total</label>
                      <input type="text" {...input} placeholder="Total" />
                    </div>
                  )}
                </Field>
                <div style={{ textAlign: "center" }}>
                  <button className="ui primary button" type="submit">
                    Save
                  </button>
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

export default ProductForm;
