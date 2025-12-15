import React, { useState } from 'react'
import Image from 'next/image'
import logo from "../assets/blog-app-logo-svg.svg";
import arrow from "../assets/arrow.png";
import axios from 'axios';
import Link from 'next/link';
import { toast } from 'react-toastify';
const Header = () => {
  const[email , setEmail] = useState("");

  const onSubmitHandler = async(e) =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("email" , email)
    const response = await axios.post('/api/email' , formData);
    if(response.data.success){
      toast.success("Email Subscribed !");
      setEmail("");
    } else{
      toast.error("Not Available!")
    }
  }

  return (
    <div className='py-5 px-5 md:py-12 lg:py-8'>
        <div className='flex justify-between items-center h-10'>
            <Link href="#"><Image src={logo} width={120} height={1} alt='Blog-App' className=' sm:w-70 cursor-pointer'/></Link>
            <button className='flex items-center gap-2 font-medium md:py-3 md:px-6 py-1 px-3 border border-black cursor-pointer shadow-[-5px_5px_0px_#000000]'>Get Started <Image src={arrow} alt='Get-Started' width={100} height={10} className='md:w-5 w-4 ' /></button>
        </div>

        <div className='text-center my-5'>
            <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
            <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus assumenda velit, provident cum atque facilis veritatis, est magnam, rerum doloribus culpa? Iusto, molestiae! Eligendi, laborum. Expedita quisquam explicabo fugit? Quasi.</p>

            <form onSubmit={onSubmitHandler} className='border border-solid border-[#000000] max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 flex justify-between shadow-[-5px_5px_0px_#000000]'>
                <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' className='pl-4 w-full outline-none' placeholder='Enter E-mail'></input>
                <button type='submit' className='py-4 px-4 sm:px-8 font-medium bg-gray-400 active:bg-red-700  active:text-[white] transform transition-all'>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default Header