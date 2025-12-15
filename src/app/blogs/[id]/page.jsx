'use client'
import React, { useEffect, useState } from 'react'
import { blog_data } from '../../../../assets/asset';
import axios from 'axios';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Header from '../../../../components/Header';
import Link from 'next/link';
import logo from "../../../../assets/blog-app-logo-svg.svg";
import arrow from "../../../../assets/arrow.png";
import Footer from '../../../../components/Footer';


const Page = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);

    const fetchData = async () => {
        const response = await axios.get('/api/blog', {
            params: { id },
        });
        setData(response.data.blog);
    };

    useEffect(() => {
        if (id) fetchData();
    }, [id]);

    return (
        <>
        {data ? (
            <div className='bg-linear-to-b from-white to-gray-500'>
                <div className='flex justify-between items-center h-10 py-15'>
                    <Link href="#"><Image src={logo} width={120} height={1} alt='Blog-App' className=' sm:w-70 cursor-pointer'/></Link>
                    <button className='flex items-center gap-2 font-medium md:py-3 md:px-6 py-1 px-3 border border-black cursor-pointer shadow-[-5px_5px_0px_#000000] mr-7'>Get Started <Image src={arrow} alt='Get-Started' width={100} height={10} className='md:w-5 w-4 ' /></button>
                </div>
                <div className=' py-10 px-7'>
                    <div className='py-4 flex justify-center items-center'>
                        <h1 className=' text-6xl max-w-[600px] font-bold'>{data.title}</h1>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-7 border-b border-gray-500 py-5'>
                        <Image src={data.image} width={400} height={400} alt='Blog-image' className='w-[50%] border-4 border-gray-400'/>
                        <div className='max-w-[100px] rounded-full overflow-hidden flex justify-center items-center object-cover'>
                            <Image src={data.authorImage} width={50} height={50} alt='authorImage' className='w-full'/>
                        </div>
                        <p className='text-xs font-medium text-gray-600 uppercase'>{data.author}</p>
                    </div>

                    <div className='flex justify-center items-center'>
                        <p className='text-xl font-normal'>{data.desc}</p>
                    </div>
                </div>
                <Footer/>
            </div>
        ) : (
            <p>Loading...</p>
        )}
        </>
    )
}

export default Page
