import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Button, ButtonGroup } from "@material-ui/core";

import FormDialog from "../Forms/AddAppointment";

export default class DemoApp extends React.Component {
  state = {
    weekendsVisible: true,
    events: [],
    openAddAppointmentForm: false,
    showMoreDetails: null,
  };
  setOpenAddAppointmentForm = (isOpen) => {
    this.setState({ openAddAppointmentForm: isOpen });
  };
  selectInfo = {};

  addEvent = (newEvent) => {
    let calendarApi = this.selectInfo.view.calendar;
    calendarApi.addEvent(newEvent);
  };

  render() {
    return (
      <div className="demo-app" style={{ height: "50vh" }}>
        {/* {this.renderSidebar()} */}
        <div className="demo-app-main">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            slotMinTime="08:00"
            slotMaxTime="20:00"
            scrollTime=""
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            slotDuration="00:05:00"
            initialView="timeGridDay"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            initialEvents={this.state.events} // alternatively, use the `events` setting to fetch from a feed
            select={this.handleDateSelect}
            eventContent={this.renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
          {this.state.openAddAppointmentForm ? (
            <FormDialog
              addEvent={this.addEvent}
              selectInfo={this.selectInfo}
              open={this.state.openAddAppointmentForm}
              setOpen={this.setOpenAddAppointmentForm}
            />
          ) : undefined}
        </div>
      </div>
    );
  }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible,
    });
  };

  handleDateSelect = (selectInfo) => {
    // let title = prompt("Please enter a new title for your event");
    // let calendarApi = selectInfo.view.calendar;

    // calendarApi.unselect(); // clear date selection

    // if (title) {
    //   calendarApi.addEvent({
    //     id: createEventId(),
    //     title,
    //     start: selectInfo.startStr,
    //     end: selectInfo.endStr,
    //     allDay: selectInfo.allDay,
    //   });
    // }
    this.selectInfo = selectInfo;
    console.log(selectInfo);
    this.setState({ openAddAppointmentForm: true });
  };

  handleEventClick = (clickInfo) => {
    console.log(clickInfo);
  };

  handleEvents = (events) => {
    this.setState({
      events: events,
    });
  };
  renderEventContent = (eventInfo) => {
    const data = eventInfo.event.extendedProps.formData;
    return (
      // <div>
      //   <b>{eventInfo.timeText}</b>
      //   <i>{eventInfo.event.title}</i>
      // </div console.log()>

      <div
        class="ui message"
        style={{ width: "90%" }}
        onMouseEnter={() =>
          this.setState({ showMoreDetails: eventInfo.event.id })
        }
        onMouseLeave={() => {
          this.setState({ showMoreDetails: null });
        }}
      >
        {console.log("eventinfo", eventInfo.event)}

        <div class="header">
          {eventInfo.event.title} - ({eventInfo.timeText})
          {/* <div className="ui right aligned header">
            <ButtonGroup
              size="medium"
              aria-label="small outlined button group"
              color="primary"
            >
              <Button
                onClick={(evt) => {
                  evt.preventDefault();
                  evt.stopPropagation();
                  console.log("button one clicked");
                }}
              >
                Visited
              </Button>
              <Button color="primary">Edit</Button>
              <Button color="Secondary">Delete</Button>
            </ButtonGroup>
          </div> */}
        </div>
        {this.state.showMoreDetails === eventInfo.event.id &&
          data &&
          data.patient &&
          data.treatment && (
            <div>
              <ul class="list">
                <li>Patient: {data.patient.name}</li>
                <li>Treatment: {data.treatment.name}</li>
              </ul>
            </div>
          )}
      </div>
    );
  };
}
