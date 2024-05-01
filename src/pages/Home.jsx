import React from 'react';
import Image from '/Users/Prince/Desktop/kaabil/kaabil/src/assets/home.jpg';

const Home = () => {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <div className='flex h-screen'>
      <div className="w-1/2 p-10" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <h1 className='text-6xl mb-4' style={{fontFamily : 'cursive'}}>Kaabil</h1>
        <div className='text-left mt-32'>
          
          <h1 className='text-3xl mb-4'style={{ fontFamily: 'Playfair Display, serif' }}>WE ARE COMING SOON</h1>
          <p className="text-lg " style={{ fontFamily: 'EB Garamond, serif' }}>Hello fellow learners! We're currently building a platform for you focusing on adaptive learning and personalized education . Stay tuned for more !!</p>
        </div>
      </div>
      <div className="w-1/2 h-full overflow-hidden">
        <img src={Image} alt="Company" className="w-full h-full object-cover"/>
      </div>
    </div>
  );
};

export default Home;
