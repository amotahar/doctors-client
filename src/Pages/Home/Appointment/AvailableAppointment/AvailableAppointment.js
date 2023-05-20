import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({selectedDate}) => {
  return (
    <section className='mt-16'>
       <p className='text-center text-secondary font-bold'>Available Services on  {format(selectedDate, "PP")}</p>
       <p>Please select a service.</p>
    </section>
  );
};

export default AvailableAppointment;