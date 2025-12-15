import React from 'react'
import Image from 'next/image'
import logo from '../../assets/blog-app-logo-icon.png'
import add from '../../assets/add-blog.png'
import list from '../../assets/blog-app-logo-icon.png'
import subs from '../../assets/email-icon.png'


import Link from 'next/link'
const Sidebar = () => {
  return (
    <div className='flex flex-col bg-slate-100 w-60 h-screen'>
        <div className='flex flex-row items-center border border-black '>
                <Link href={"/admin"}><p className='flex items-center gap-3 text-3xl font-bold py-5 px-10'><Image src={logo} width={100} alt='blog-app-logo' className='w-8 ' priority/>BlogApp</p></Link>
        </div>

        <div className='flex flex-col w-20 sm:w-80 px-10 py-5'>
            <Link href={"/admin/addBlog"}><button className='flex items-center border border-black p-2 w-full max-w-[200px] gap-2 text-sm font-medium shadow-[-7px_5px_0px_#000000]  cursor-pointer'><Image src={add} alt='add-blog' width={40}  className='w-5'/>Add Blog</button></Link>
            <Link href={"/admin/blogList"}><button className='flex items-center border border-black p-2 w-full max-w-[200px] gap-2 text-sm font-medium shadow-[-7px_5px_0px_#000000] mt-5 cursor-pointer'><Image src={list} alt='blogs-list' width={40} className='w-5'/>Blogs List</button></Link>
            <Link href={"/admin/subscription"}><button className='flex items-center border border-black p-2 w-full max-w-[200px] gap-2 text-sm font-medium shadow-[-7px_5px_0px_#000000] mt-5 cursor-pointer'><Image src={subs} alt='blog-subscribe' width={40} className='w-5 '/>Blogs Subscribed</button></Link>
        </div>
    </div>
    
  )
}

export default Sidebar