"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logoFooter from "@/public/logoFooter.svg"
import { FaArrowRightLong, FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import Link from 'next/link'
import { TiMediaEject } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { BsGithub } from 'react-icons/bs'



const Footer = () => {
  const [logos, setLogos] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleLogos = () => {
    setLogos(!logos);
  };

  if (!hasMounted) return null; 

  return (
    <section className='py-16 px-6 mt-24 bg-gradient-to-r from-[#D9D9D9] via-#D9D9D9 to-white h-[300px] rounded-t-full font-roboto relative '>
      <footer className='max-w-7xl mx-auto '>
        <div className='flex items gap-x-3 border-b border-[#C9C9C9] pb-4'>
          <Image src={logoFooter} alt='logo' className='hidden md:block ' />
          <div className='w-full'>
            <div className='md:flex justify-between items-center'>
              <h1 className='font-semibold md:text-lg lg:text-xl text-black'>Believe Us As Counselor</h1>
              <div className='flex items-center gap-x-5  font-normal text-base text-black'>
                <Link href="/#" className='hover:text-primary transition-all duration-300 ease-in-out'>Home</Link>
                <Link href="/#services" className='hover:text-primary transition-all duration-300 ease-in-out'>Services</Link>
                <Link href="/#about" className='hover:text-primary transition-all duration-300 ease-in-out'>About Us</Link>
                <Link href="/contact" className='hover:text-primary transition-all duration-300 ease-in-out'>Contact</Link>
              </div>
            </div>
            <div className='border-b-2 border-[#A5A5A5] my-4'>{''}</div>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-3'>
              <div className=" bg-primary text-white flex items-center justify-center space-x-2 rounded-lg lg:px-8 px-4 py-2 order-2 md:order-1">
                <button className="font-normal text-xs md:text-sm">Join Now</button>
                <FaArrowRightLong />
              </div>
              <div className='flex order-1 items-center gap-x-5 font-normal text-sm md:text-base text-[#7D7D7D]'>
                <Link href="#" className='hover:text-primary transition-all duration-300 ease-in-out'>Terms of use</Link>
                <Link href="#" className='hover:text-primary transition-all duration-300 ease-in-out'>Privacy Police</Link>
                <Link href="#" className='hover:text-primary transition-all duration-300 ease-in-out'>Cookie Police</Link>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-between py-4'>
          <p className='text-xs md:text-sm font-normal text-black w-[250px] md:w-full'>Copyright &copy; 2024 Malang, All rights reserved. Design Website By <span className='bg-gradient-to-r from-red-400 via-blue-400 to-purple-400 text-transparent bg-clip-text font-semibold'>Abim</span> <span className='text-primary'>&</span> <span className='bg-gradient-to-r from-red-400 via-blue-400 to-purple-400 text-transparent bg-clip-text font-semibold'>Hanif</span></p>
          <div className='text-primary'>
            <button onClick={handleLogos} className=' text-lg md:text-xl'>
              {logos ? <IoMdClose /> : <TiMediaEject className='rotate-180' />}
            </button>
          </div>
        </div>
        {logos && (
          <div className='fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center'>
            <div className='relative bg-white shadow-lg p-6 rounded-xl w-[90%] max-w-xl'>
              <button onClick={handleLogos} className='absolute top-4 right-4 text-2xl text-black hover:text-primary'>
                <IoMdClose />
              </button>
              <h1 className='text-primary font-roboto font-semibold text-center mb-6 text-lg'>Let's Connect 🔗</h1>

              <div className='space-y-6'>
                <div className='text-black'>
                  <h2 className='pb-2 bg-gradient-to-r from-[#ff00cc] via-[#333399] to-[#00ffee] bg-[length:200%_200%] bg-[position:0%_50%] animate-gradient-move text-transparent bg-clip-text font-semibold text-center'>
                    Fanani Akbar Abimanyu
                  </h2>

                  <div className='flex justify-center space-x-4 text-xl'>
                    <Link href='https://github.com/Abimanyuoke' target='_blank'><BsGithub /></Link>
                    <Link href='https://www.instagram.com/fanani_abimanyu/' target='_blank'><FaInstagram /></Link>
                    <Link href='https://web.facebook.com/abim.manyu.3914207' target='_blank'><FaFacebookF /></Link>
                    <Link href='https://www.linkedin.com/in/fanani-akbar-abimanyu-978a03298/' target='_blank'><FaLinkedin /></Link>
                  </div>
                </div>

                <div className='text-black'>
                  <h2 className='pb-2 bg-gradient-to-r from-[#ff00cc] via-[#333399] to-[#00ffee] bg-[length:200%_200%] bg-[position:0%_50%] animate-gradient-move text-transparent bg-clip-text font-semibold text-center'>Hanif Dzakwan Rabbani</h2>
                  <div className='flex justify-center space-x-4 text-xl'>
                    <Link href=''><FaInstagram /></Link>
                    <Link href=''><FaFacebookF /></Link>
                    <Link href=''><FaLinkedin /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </footer>
    </section>
  )
}

export default Footer