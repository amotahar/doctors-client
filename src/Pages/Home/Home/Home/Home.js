import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Services from './Services/Services';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Testimonial from '../../Testimonial/Testimonial';
import Contact from '../../Contact/Contact';


const Home = () => {
  return (
    <div className='mx-5'>
       <Banner></Banner>
       <InfoCards></InfoCards>
       <Services></Services>
       <MakeAppointment></MakeAppointment>
       <Testimonial></Testimonial>
       <Contact></Contact>
    </div>
  );
};

export default Home;