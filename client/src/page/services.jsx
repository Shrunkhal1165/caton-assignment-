import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import Bg from '../public/assets/services_img.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import img1 from '../public/assets/online.png';
import img2 from '../public/assets/records.png';
import img3 from '../public/assets/Labreports.png';
import img4 from '../public/assets/fitness.png';

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with desired duration
  }, []);
  const data = [
    {
      title: "Online Appointment Booking",
      description: "Say goodbye to long queues and waiting times! With our seamless online appointment booking system, patients can easily schedule consultations with the best doctors at their convenience. Stay in control of your health with just a few clicks.",
      img:img1
    },
    {
      title: "Managing Health Records",
      description: "Stay organized with digital health records. Patients can easily access and manage their medical data, making healthcare smoother for both patients and providers.",
      img:img2
    },
    {
      title: "Lab Reports",
      description: "Get lab reports at your fingertips. With our platform, accessing and sharing lab results has never been easier.",
      img:img3
    },
    {
      title: "Fitness Tracking",
      description: "Track your fitness progress and stay on top of your health goals with personalized fitness tracking solutions.",
      img:img4
    },
  ]
  return (
    <>
      <div className="flex flex-col md:flex-row justify-around items-center h-[500px] w-full bg-gradient-to-r from-[#003C43] to-[#77B0AA] p-5">
        <div
          className="flex flex-col justify-center gap-5"
          data-aos="fade-right" // Animation for the content div
        >
          <div className="flex flex-col ">
            <h1 className="text-white text-4xl md:text-5xl font-bold bg-gradient-to-r to-[#00b4d8] via-[#0077b6] from-[#00b4d8] text-transparent bg-clip-text">
              Services  
            </h1>
            {/* <p className="text-white text-lg md:text-xl">
              Discover our unique services and experiences
            </p> */}
          </div>
        </div>
        <img src={Bg} alt="" className="h-48 md:h-72 w-48 md:w-72" data-aos="fade-left" />
      </div>
      <div className="w-full flex justify-center gap-8 py-10 flex-wrap bg-custom_bg">
        {data.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center shadow-sm shadow-black h-[350px] w-[90%] md:w-[550px] bg-white relative overflow-hidden group bg-cover bg-no-repeat"
            data-aos="fade-up" style={{'backgroundImage':`url(${service.img})`}}
          >
            <h1 className="z-10 text-xl md:text-2xl text-[#003C43]">{service.title}</h1>
            <p className="absolute bottom-0 left-0 p-5 bg-white w-full opacity-0 transform translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}