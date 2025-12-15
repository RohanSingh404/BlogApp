'use client'
import React from 'react'
import Sidebar from "../../../components/AdminComponents/Sidebar"
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const layout = ({children}) => {
  return (
    <div className='flex min-h-screen'>
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            closeOnClick
            pauseOnHover
            draggable
        />

        <Sidebar/>
        <div className='flex flex-col w-full'>
            <div className='flex justify-between items-center w-full bg-blue-200 py-3 px-2'>
                <h1 className='text-xs font-bold'>Admin Panel</h1>
                <Image src={"/profile-icon.png"} width={120} height={120} alt='user-profile' className='w-5'/>
            </div>

            <div className="p-6">
                {children}
            </div>
        </div>

        
    </div>
  )
}

export default layout
