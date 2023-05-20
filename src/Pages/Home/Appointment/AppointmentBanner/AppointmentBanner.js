import React, { useState } from "react";
import chair from "../../../../assets/images/chair.png";
import bg from "../../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
  return (
    <header className="my-6">
      <div className="hero" style={{
      background: `url(${bg})`,
      backgroundSize: "cover",
    }}>
        <div className="hero-content flex-col lg:flex-row-reverse" >
          <img
            src={chair}
            alt="chair dentist"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="mr-8">
              <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              />
              <p>You have selected date : {format(selectedDate, "PP")}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
