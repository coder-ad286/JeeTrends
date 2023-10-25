import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'
import { IoLogoWhatsapp } from 'react-icons/io'
import { BsFacebook } from 'react-icons/bs'
import { FaPhoneAlt } from 'react-icons/fa'
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className='text-white h-[230px] mt-10 md:h-[150px] mx-auto bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg'>
      <div className='grid grid-cols-2 md:grid-cols-4 md:gap-3 border-b md:border-none h-[100px] md:h-[150px] md:px-3'>
        <div className=' flex h-[100px] md:h-[150px]'>
          <div className='my-auto mx-auto'>
            <h1 className='text-sm sm:text-lg md:text-2xl lg:text-3xl font-thin font-poppins'>JEE <span className='text-[#f0008b] font-bold'>TRENDS</span>,</h1>
            <h1 className='font-semibold tracking-normal text-[#08b14a] text-[8px] md:text-[11px] lg:text-[15px]'>BEAUTY BRINGS YOU MORE CONFIDENCE</h1>
          </div>
        </div>
        <div className=' flex h-[100px] md:h-[150px] '>
          <div className='my-auto mx-auto flex flex-col text-center justify-center border-l md:border-r pl-10 md:px-14 lg:px-20 '>
            <Link
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => navigate('/')}
              className='hover:cursor-pointer'
            >Home</Link>
            <Link activeClass="active"
              to="gallery"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => navigate('/gallery')} className='mt-2 hover:cursor-pointer'

            >Gallery</Link>

          </div>
        </div>
        <div className=' flex h-[100px] md:h-[150px]  col-span-2 justify-center mt-3 md:mt-0'>
          <div className='my-auto mx-auto flex'>
            <div className='px-4 md:px-14 flex flex-col'>
              <a target='blank' href="https://api.whatsapp.com/send/?phone=%2B919043314331&text=Hi%20*JeeTrends*%20,%20Make%20Me%20Beautiful">
                <IoLogoWhatsapp className='text-[#40c351] w-[25px] h-[28px] sm:w-[45px] sm:h-[48px] mx-auto' />
                <button className='rounded px-1 mt-3 text-[8px] sm:text-[10px] md:text-[13px] bg-[#40c351] border-2 border-[#333333] text-[#ffffff] font-poppins font-semibold py-1  hover:bg-gray-500 hover:border-[#40c351]'>Chat Now</button>
              </a>
            </div>
            <div className='px-4 md:px-14 flex flex-col'>
              <a target='blank' href="https://www.facebook.com/profile.php?id=100088848459921&sk">
                <BsFacebook className='text-[#0d87e1] w-[25px] h-[28px] sm:w-[45px] sm:h-[48px] mx-auto' />
                <button className='rounded px-1 mt-3 text-[8px] sm:text-[10px] md:text-[13px] bg-[#0d87e1] border-2 border-[#333333] text-[#ffffff] font-poppins font-semibold py-1  hover:bg-gray-500 hover:border-[#0d87e1]'>Follow Us</button>
              </a>

            </div>
            <div className='flex px-4 md:px-14 flex-col'>
              <a href="tel:+919043314331">
                <FaPhoneAlt  className='text-[#2095f3] w-[25px] h-[28px] sm:w-[45px] sm:h-[48px] mx-auto' />
                <button className='rounded px-2 mt-[14px] text-[8px] sm:text-[10px] md:text-[13px] bg-[#2095f3] text-[#000000] font-poppins font-semibold py-1  hover:bg-gray-500'>+91 9043314331</button>
              </a>

            </div>

          </div>
        </div>


      </div>

    </div>
  )
}

export default Footer
