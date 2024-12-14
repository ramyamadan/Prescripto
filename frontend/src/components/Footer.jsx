import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
           {/* left section */}
           <div>
              <img className='mb-5 w-40' src={assets.logo}></img>
              <p className='w-full md:w-2/3 text-gray-600 leading-6'>Welcome to Prescripto, your trusted platform for booking medical appointments. Connect with experienced doctors, schedule consultations, and manage appointments effortlessly. Enjoy secure, 24/7 access to healthcare services, ensuring your well-being with convenience and reliability.</p>
           </div>

           {/* center section */}
           <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li><a   >Home</a></li>
                <li><a href="frontend\src\pages\About.jsx">About us</a></li>
                <li><a href="frontend\src\pages\Contact.jsx">Contact us</a></li>
            </ul>

           </div>

           {/* right section */}
           <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+91-92537-67823</li>
                <li>WellnessPoint@gmail.com</li>
            </ul>
           </div>
        </div>
        <div>
            {/* copyright line */}
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2024@ WellnessPoint-All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer