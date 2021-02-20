import React from "react";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";

import { v4 as uuidv4 } from "uuid";
import AppointmentForm from "./FormLayout";

export default function FormDialog(props) {
  const handleClose = () => {
    props.setOpen(false);
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return (
      <Slide direction="up" timeout={{ appear: 200 }} ref={ref} {...props} />
    );
  });

  const handleSubmit = (data) => {
    const eventData = {
      id: uuidv4(),
      title: data.title,
      start: data.start,
      end: data.end,
      allDay: props.selectInfo.allDay,
      formData: data,
    };
    props.addEvent(eventData);
    props.setOpen(false);
  };

  return (
    <div>
      <Dialog
        maxWidth="md"
        TransitionComponent={Transition}
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        PaperProps={{
          style: {
            backgroundColor: "rgb(240,240,240)",
          },
        }}
      >
        <AppointmentForm data={props.selectInfo} onSubmit={handleSubmit} />
      </Dialog>
    </div>
  );
}
