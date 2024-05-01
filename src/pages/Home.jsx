import React, { useState, useEffect , useRef } from 'react';
import "../Home.css";
import emailjs from '@emailjs/browser'; // Import emailjs-com instead of @emailjs/browser
import NavBar from './NavBar';
import Lottie from 'lottie-react';
import animationData from '../assets/try1.json';

const Home = () => {
  const form= useRef();
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', comments: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("sending msg")
    emailjs
      .sendForm('service_5xsjt3m', 'template_k3app9g', form.current, {
        publicKey: 'gvOOoNvYoW_77TQYi',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      form.current.reset();
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setFormData({});
    form.current.reset();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    closeModal();
  };

  // Close modal when pressing Esc key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27 && isModalOpen) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isModalOpen]);

  return (
    <div className='flex h-screen bg-black justify-center items-center'>
       <NavBar />
      <div className="w-1/2 p-10" style={{ fontFamily: 'Roboto Mono, monospace' }}>
       
        <div className='text-center mt-32'>
          <h1 className='text-3xl mb-4 text-white font-greek '>WE ARE<span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "} COMING SOON</span></h1>
          <p className="text-xl text-white font-greek py-16 ">Prepare to revolutionize your learning experience with our adaptive platform, where education meets personalization. Stay tuned for a transformative journey tailored just for you!</p>
          <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Contact Us</button>
        </div>
      </div>
      <div className="w-1/2 h-full overflow-hidden">
        <Lottie animationData={animationData} />
      </div>
      {isModalOpen && (
        <div className="modal-wrapper">
          <div className="modal bg-white">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <form ref= {form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="mt-1 p-2 border rounded-md w-full" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="mt-1 p-2 border rounded-md w-full" required />
              </div>
              <div className="mb-4">
                <label htmlFor="comments" className="block text-sm font-medium text-gray-700">Comments</label>
                <textarea id="comments" name="comments" value={formData.comments} onChange={handleInputChange} className="mt-1 p-2 border rounded-md w-full h-24" required></textarea>
              </div>
              <div className="text-right">
                <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                <button type="button" onClick={closeModal} className="ml-2 text-gray-600 hover:text-gray-800 font-semibold">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
