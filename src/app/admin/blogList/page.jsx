'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BlogTableItems from '../../../../components/AdminComponents/BlogTableItems'
import { toast } from 'react-toastify'
const page = () => {
    const [data , setData] = useState([])
    const fetchData = async() =>{
        const response = await axios.get('/api/blog')
        setData(response.data.blogs);
    }

    const deleteBlog = async(mongoId) =>{
        const response = await axios.delete('/api/blog' , {
            params:{
                id:mongoId
            }
        })
        toast.success("Blog Deleted Successfully !")
        fetchData();
    }

    useEffect(() =>{
        fetchData();
    },[]);

  return (
    <div className='flex flex-col py-2 px-5'>
        <h1 className='text-xl font-bold'>
            All Blogs
        </h1>
        <div className='relative h-[80vh] max-w-[800px] overflow-x-auto mt-8'>
            <table className='min-w-full text-sm text-gray-400 text-center uppercase'>
                <thead className='text-sm text-gray-700 bg-blue-500 w-full'>
                    <tr>
                        <th className='text-xs  px-6 py-3 hidden sm:block'>Author Image</th>
                        <th className='text-xs  px-6 py-3'>Author Name</th>
                        <th className='text-xs  px-6 py-3'>Blog Title</th>
                        <th className='text-xs  px-6 py-3'>Post Date</th>
                        <th className='text-xs  px-6 py-3'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((items , index) => {
                        return <BlogTableItems key={index} mongoId = {items._id} authorImg={items.authorImage} author={items.author} title={items.title} date={items.date} deleteBlog = {deleteBlog}/>
                    })}
                </tbody>                    
            </table>
        </div>
        
    </div>
  )
}

export default page