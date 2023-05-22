import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppointment = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("AppointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);
  return (
    <section className="my-16">
      <p className="text-center text-secondary font-bold">
        Available Services on{format(selectedDate, "PP")}
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
        {
          appointmentOptions.map(option=><AppointmentOption
          key={option._id}
          appointmentOption={option}
          setTreatment={setTreatment}
          ></AppointmentOption>)
        }

      </div>
      { treatment && 
        <BookingModal
      
      treatment={treatment}
      selectedDate={selectedDate}
      setTreatment={setTreatment}
      ></BookingModal>}
    </section>
  );
};

export default AvailableAppointment;
