'use client'
import React, { useEffect, useState } from 'react'
import SubTableItems from '../../../../components/AdminComponents/SubTableItems'
import axios from 'axios';
import { toast } from 'react-toastify';

const page = () => {
  const [emails , setEmails] = useState([]);

  const fetchData = async() =>{
    const response = await axios.get('/api/email');
    setEmails(response.data.emails);

  }

  const deleteEmail = async(mongoId) =>{
    const response = await axios.delete('/api/email' , {
      params :{
        id:mongoId,
      }
    })
    fetchData();

    if(response.data.success){
      toast.success("Email Unsubscribed!")
    }else{
      toast.error("Error!")
    }
  }

  useEffect(() =>{
    fetchData();
  },[])

  return (
    <div className='px-6 py-3 '>
        <p className='uppercase text-xs font-bold'>
          All subscribed emails : 
        </p>

        <div className='relative h-[80vh] max-w-[800px] overflow-x-auto mt-8'>
          <table className='min-w-full text-sm text-gray-400 text-center'>
            <thead className='text-sm text-gray-700 bg-blue-500 w-full  '>
              <tr>
                <th className='text-xs font-bold text-center py-2 uppercase'>Emails</th>
                <th className='text-xs font-bold text-center py-2 uppercase'>Date</th>
                <th className='text-xs font-bold text-center py-2 uppercase'>Action</th>
              </tr>
            </thead>
            <tbody>
              {emails.map((items , index) =>{
                return <SubTableItems key={index} mongoId = {items._id} email = {items.email} date = {items.date} deleteEmail={deleteEmail}/>
              })}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default page