import React from 'react';
import clock from '../.../../../../../assets/icons/clock.svg';
import marker from '../.../../../../../assets/icons/marker.svg';
import phone from '../.../../../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
  const cardData = [ 
    { 
      id: 1,
      icon: clock,
      name: 'Opening Hour',
      description: "Open 10 am to 10 pm",
      bgClass: 'bg-gradient-to-r from-primary to-secondary'
    },
    { 
      id: 2,
      icon: marker,
      name: 'Visit Our Location',
      description: "Dhaka, Bangladesh",
      bgClass: 'bg-accent'
    },
    { 
      id: 3,
      icon: phone,
      name: 'Contact Us',
      description: "01287615313",
      bgClass: 'bg-gradient-to-r from-primary to-secondary'
    },
  ]
  return (
    <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          cardData.map(card=> <InfoCard
               key={card.id}
               card={card}
          ></InfoCard>)
        }
    </div>
  );
};

export default InfoCards;














// import React from 'react';
// import clock from '../../../../assets/icons/clock.svg'
// import marker from '../../../../assets/icons/marker.svg'
// import phone from '../../../../assets/icons/phone.svg'
// import InfoCard from './InfoCard';

// const InfoCards = () => {

//   const cardData = [
//     {
//       id: 1,
//       name: 'Opening Hours',
//       description: 'Open 9 am to 10 pm',
//       icon: clock,
//       bgClass: 'bg-gradient-to-r from-primary to-secondary',
//     },
//     {
//       id: 2,
//       name: 'Visit Our Loacation',
//       description: 'Dhaka, Bangladesh',
//       icon: marker,
//       bgClass: 'bg-accent',
//     },
//     {
//       id: 3,
//       name: 'Contact us now',
//       description: '14678656789',
//       icon: phone,
//       bgClass: 'bg-gradient-to-r from-primary to-secondary',
//     },

//   ]
//     return (
//     <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
//       {
//         cardData.map(card=><InfoCard
//            key={card.id}
//            card={card}
//         ></InfoCard>)
//       }
//     </div>
//   );
// };

// export default InfoCards;