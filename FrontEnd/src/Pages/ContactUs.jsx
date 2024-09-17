// import React from 'react';


// const ContactUs = () => {

 

//   return (
//     <>
//       <h1 className='text-2xl font-bold text-center mt-5 mb-5'>Contact Us</h1>
//     <div className="container flex justify-center items-center">
  
//     <div className="formContainer w-[40%] bg-white shadow-2xl" >
//      <form action="https://api.web3forms.com/submit" method="post" className='p-10' >
//         <input type="hidden" name="access_key" value="15fd6570-21c3-4743-9db6-de7f8dab8225" />
//         <input type="text" name="name" placeholder='Enter your name' className='h-10 border border-gray-500 w-full p-2 mt-5 mb-2' />
//         <input type="text" name='subject' placeholder='Enter your subject' className='h-10 border border-gray-500 w-full p-2 mt-2' />
//         <input type="email" name="email" placeholder='Input your email' className='h-10 border border-gray-500 w-full p-2 mt-2'/>
//         <textarea name="message" placeholder='Enter your message here ...' className=' h-32 border border-gray-500 w-full p-2 mt-2'></textarea>
//         <input type="submit" value="Send" className='bg-black text-white w-full h-10 p-2 mt-5 mb-5' />
//       </form>
//      </div>
      
//     </div>
//     </>
//   );
// }

// export default ContactUs;
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_q2xh0nu', 'template_ki3gihl', e.target, 'WX6IBQDlmOUu0a6zf')
      .then((result) => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        setStatus('Failed to send message.');
      });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white p-3 rounded"
        >
          Send Message
        </button>
        {status && <p className="mt-4 text-lg">{status}</p>}
      </form>
    </div>
  );
};

export default ContactUs;
