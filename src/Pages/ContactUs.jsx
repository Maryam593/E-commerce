import React from 'react';


const ContactUs = () => {

 

  return (
    <>
      <h1 className='text-2xl font-bold text-center mt-5 mb-5'>Contact Us</h1>
    <div className="container flex justify-center items-center">
  
    <div className="formContainer w-[40%] bg-white shadow-2xl" >
     <form action="https://api.web3forms.com/submit" method="post" className='p-10' >
        <input type="hidden" name="access_key" value="15fd6570-21c3-4743-9db6-de7f8dab8225" />
        <input type="text" name="name" placeholder='Enter your name' className='h-10 border border-gray-500 w-full p-2 mt-5 mb-2' />
        <input type="text" name='subject' placeholder='Enter your subject' className='h-10 border border-gray-500 w-full p-2 mt-2' />
        <input type="email" name="email" placeholder='Input your email' className='h-10 border border-gray-500 w-full p-2 mt-2'/>
        <textarea name="message" placeholder='Enter your message here ...' className=' h-32 border border-gray-500 w-full p-2 mt-2'></textarea>
        <input type="submit" value="Send" className='bg-black text-white w-full h-10 p-2 mt-5 mb-5' />
      </form>
     </div>
      
    </div>
    </>
  );
}

export default ContactUs;
