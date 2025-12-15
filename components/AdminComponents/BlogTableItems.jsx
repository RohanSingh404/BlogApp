import axios from 'axios'
import Image from 'next/image'
import React from 'react'

const BlogTableItems = ({authorImg , author , title , date , deleteBlog , mongoId}) => {
    
  return (
        <tr className='bg-white border-b w-full'>
            <td scope='col' className='hidden sm:block px-6 py-4'>
                <Image src={authorImg ? authorImg : "/author.jpeg"} alt='Author-Image' width={100} height={100} className=' w-7'/>
            </td>

            <td className='px-6 py-4 text-xs text-blue-600'>
                {author? author:"No Name"}
            </td>

            <td className='px-6 py-4 text-xs w-full'>
                {title? title:"No title"}
            </td>

            <td className='px-6 py-4 text-xs'>
                {date? date : Date.now()}
            </td>

            <td onClick={() => deleteBlog(mongoId)} className='px-6 py-4 text-xs cursor-pointer'>
                X
            </td>
        </tr>
    
  )
}

export default BlogTableItems