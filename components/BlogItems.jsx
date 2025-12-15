import React from 'react'
import Image from 'next/image'
import arrow from '../assets/arrow.png';
import Link from 'next/link';
const BlogItems = ({image , desc , category , title , id}) => {
  return (
    <div className='max-w-[250px] border border-black mx-4 hover:shadow-[-7px_6px_0px_#000000] cursor-pointer'>
        <Link href={`/blogs/${id}`}>
        <Image src={image || "/author.jpeg"} alt='Blog-image' width={200} height={200} className=" w-full object-cover" priority/>
        </Link>
        <p className='bg-black text-xs  inline-block text-white mx-5 my-2 px-2 py-1'>{category}</p>

        <div className='mx-5'>
            <h5 className='font-semibold text-xs mt-1 tracking-tight'>{title}</h5>
            <p className='text-xs text-gray-500 mt-2 tracking-tight'>{desc}</p>
            <Link href={`/blogs/${id}`} className='font-bold text-xs gap-2 inline-flex items-center mt-5  mb-5 cursor-pointer'>Read More <Image src={arrow} alt='arrow' width={400} height={400} className='w-4'/></Link>
        </div>
    </div>

        
  )
}

export default BlogItems