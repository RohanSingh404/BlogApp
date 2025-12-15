'use client'
import axios from 'axios';
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const page = () => {
    const [image , setImage] = useState(false);
    const [data , setData] = useState({
        title:"",
        desc:"",
        category:"Startup",
        author:"",
        authorImg:"/author.jpeg"
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({...data , [name]:value}));
        console.log(data);
    }

    const onSubmitHandler = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title' , data.title)
        formData.append('desc' , data.desc)
        formData.append('category' , data.category)
        formData.append('author' , data.author)
        formData.append('authorImg' , data.authorImg)
        formData.append('image' , image)

        const response = await axios.post('/api/blog' , formData);

        if(response.data.success){
            toast.success("response send successfully !")
            setImage(false)
            setData({
                title:"",
                desc:"",
                category:"",
                author:"",
                authorImg:"/author.jpeg"
            })
        }
        else{
            toast.error("error");
        }
    }

  return (
    <div>
        <form onSubmit={onSubmitHandler} className='flex flex-col w-full gap-5'>
            <p className='text-xl font-bold'>Upload Thumbnail</p>
            <label htmlFor='image'>
                <Image src={!image?"/file-upload-icon.png": URL.createObjectURL(image)} width={120} height={120} alt='thumbnail' className='w-10'/>
                <input onChange={(e) => setImage(e.target.files[0])} type='file' id='image' hidden required></input>
            </label>

            <p className='text-xl font-bold'>Blog Title</p>
            <input type='text' name='title' onChange={onChangeHandler} value={data.title} placeholder='Enter Blog Title' className='w-full sm:w-[500px] px-2 py-3 border border-slate-500'/>

            <p className='text-xl font-bold'>Blog Description</p>
            <textarea placeholder='Enter Blog desc' name='desc' onChange={onChangeHandler} value={data.desc} rows={6} className='w-full sm:w-[500px] px-2 py-3 border border-slate-500'/>

            <p className='text-xl font-bold'>Blog Author`s Name</p>
            <input type='text' placeholder='Enter Blog Author`s Name' name='author' onChange={onChangeHandler} value={data.author} className='w-full sm:w-[500px] px-2 py-3 border border-slate-500'/>

            <p className='text-xl font-bold'>Blog Category</p>
            <select className='w-full sm:w-[200px] border border-slate-500 py-1 px-3' name='category' onChange={onChangeHandler} value={data.category}>
                <option value={"Technology"} className='text-sm'>Technology</option>
                <option value={"Food"} className='text-sm'>Food</option>
                <option value={"Love"} className='text-sm'>Love</option>
            </select>
            <br></br>
            <button type="submit" className="p-5 bg-black w-auto sm:w-[20%] text-white rounded-2xl">
                Add
            </button>
        </form>
    </div>
  )
}

export default page