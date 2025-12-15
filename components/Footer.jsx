import Image from 'next/image'
import React from 'react'
import img from '../assets/blog-app-logo-svg.svg'
import { FaFacebook, FaInstagram, FaReddit, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';
const Footer = () => {
  return (
    <div className='bg-black mt-10 flex flex-col justify-between items-center px-10 sm:flex-row '>
        <Image src={img} width={400} height={400} alt='blog-App' className='w-50'/>
        <p className='text-sm font-light text-amber-200'>All Rights Reserved @copyright ~ Made by Rohan Singh</p>

        <div className='flex flex-row items-center gap-5'>
            <Link href={"https://x.com/thissrohansingh"} target='_blank'><FaTwitter className='text-white hover:text-blue-500 cursor-pointer'/></Link>
            <Link href={"https://www.instagram.com/"} target='_blank'><FaInstagram className='text-white  hover:text-blue-500 cursor-pointer'/></Link>
            <Link href={"/"} target='_blank'><FaWhatsapp className='text-white  hover:text-blue-500 cursor-pointer'/></Link>
            <Link href={"/"} target='_blank'><FaReddit className='text-white  hover:text-blue-500 cursor-pointer' /></Link>
        </div>
    </div>
  )
}

export default Footer