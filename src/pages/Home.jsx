import React, { useState } from 'react';
import Image from '/Users/Prince/Desktop/kaabil/kaabil/src/assets/home.jpg';

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', comments: '' });

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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

  return (
    <div className='flex h-screen'>
      <div className="w-1/2 p-10" style={{ fontFamily: 'Roboto, sans-serif' }}>
        <h1 className='text-6xl mb-4' style={{ fontFamily : 'cursive' }}>Kaabil</h1>
        <div className='text-left mt-32'>
          <h1 className='text-3xl mb-4'style={{ fontFamily: 'Playfair Display, serif' }}>WE ARE COMING SOON</h1>
          <p className="text-lg " style={{ fontFamily: 'EB Garamond, serif' }}>Hello fellow learners! We're currently building a platform for you, focusing on adaptive learning and personalized education. Stay tuned for more!</p>
          <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Contact Us</button>
        </div>
      </div>
      <div className="w-1/2 h-full overflow-hidden">
        <img src={Image} alt="Company" className="w-full h-full object-cover"/>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="bg-white p-8 rounded-lg max-w-xl w-full">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit}>
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
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
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
