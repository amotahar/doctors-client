import { format } from "date-fns";
import React from "react";

const BookingModal = ({treatment, selectedDate}) => {
  const { name, slots } = treatment; //treatment is appointment options is different name
  const date = format(selectedDate, "PP");

  const handleBooking = event => {
   event.preventDefault();
   const form = event.target;
   const slot = form.slot.value;
   const name= form.name.value;
   const email = form.email.value;
   const phone = form.phone.value;

   console.log(date, name, slot, email, phone)

  }
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            {name}
          </h3>
          <form onSubmit={handleBooking} action="" className="grid gap-3 grid-cols-1 mt-10">

          <input type="text" disabled value={date}   className="input w-full input-bordered" />
          <select name="slot" className="select select-bordered w-full ">
                {
                  slots.map(slot=> <option value={slot}>{slots}</option> )
                }
        
          </select>
          <input name="name" type="text" placeholder="Type here" className="input w-full input-bordered" />
          <input name="email" type="text" placeholder="Type here" className="input w-full input-bordered" />
          <input name="phone" type="text" placeholder="Type here" className="input w-full input-bordered" />  <br />
          <input className="btn btn-accent w-full max-w-xs" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
