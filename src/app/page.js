'use client'
import Image from "next/image";
import Header from "../../components/Header";
import BlogItems from "../../components/BlogItems";
import BlogList from "../../components/BlogList";
import Footer from "../../components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Home() {
  return (
    <div>
      <ToastContainer/>
      <Header/>
      <BlogList/>
      <Footer/>
    </div>
  );
}
