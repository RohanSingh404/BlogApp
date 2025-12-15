import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { blog_data } from '../assets/asset'
import BlogItems from './BlogItems'
const BlogList = () => {
    const [menu , setMenu] = useState("All");
    const [blogs , setBlogs] = useState([]);

    const fetchBlogs = async() =>{
        const response = await axios.get('/api/blog');
        setBlogs(response.data.blogs);
        console.log(blogs)
    }
    
    useEffect(()=>{
        fetchBlogs();
    },[])

  return (
    <div>
        <div className='flex justify-center items-center gap-5 transform transition-all'>
            <button onClick={() =>setMenu("All")} className={menu === "All" ? 'text-sm text-white font-medium bg-black py-1 px-4 rounded-sm cursor-pointer' : ''}>All</button>
            <button onClick={() =>setMenu("Technology")} className={menu === "Technology" ? 'text-sm text-white font-medium bg-black py-1 px-4 rounded-sm cursor-pointer' : ''}>Technology</button>
            <button onClick={() =>setMenu("Travel")} className={menu === "Travel" ? 'text-sm text-white font-medium bg-black py-1 px-4 rounded-sm cursor-pointer' : ''} >Travel</button>
            <button onClick={() =>setMenu("Food")} className={menu === "Food" ? 'text-sm text-white font-medium bg-black py-1 px-4 rounded-sm cursor-pointer' : ''} >Food</button>
        </div>
        <div className='flex flex-wrap justify-center  gap-y-5 mb-1 mt-10'>
            {blogs.filter((items) => menu==="All" ? true : items.category === menu).map((items , index) => {
                return <BlogItems key={index} id={items._id} image={items.image} desc={items.desc} category={items.category} title={items.title}/>
            })}
        </div>
    </div>
  )
}

export default BlogList