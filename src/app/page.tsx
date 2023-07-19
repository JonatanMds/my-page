"use client"; // This is a client component 👈🏽
import axios from 'axios'
import { useEffect, useState } from 'react'
import {FaGithub, FaLinkedin, FaYoutube} from "react-icons/fa"
import Header from '@/patterns/Header';
import Footer from '@/patterns/Footer';


type Users = {
  login: string,
  name: string,
  avatar_url: string,
  id: string;
}


export default function Home() {
  
  const baseURL = 'https://api.github.com/users/'
  const [user, setUser] = useState<Users | null>(null)
  
  useEffect(()=>{
    axios
    .get(`${baseURL}jonatanmds`)
    .then((response)=>setUser(response.data))
    .catch((err)=>{
      console.log("ops! ocorreu um erro"+err)
    })
  },[])

  return (
    <main className="w-full flex flex-col justify-between min-h-screen items-center gap-28 px-20">
      <Header />
      <div className='flex flex-col gap-4'>
          <h1 className='text-base md:text-5xl'>Jonatan Marques</h1>
        <div>
          <p>Front-End Developer</p>
          <p className='text-xs md:text-sm text-[#939393]'>ReactJS | NextJs | Vue | TypeScript | JavaScript | NodeJs | Python</p>
        </div>
        <ul className='flex gap-4'>
          <li>
            <a href='https://github.com/JonatanMds' target='_blank' rel="noopener noreferrer" >
              <FaGithub size="1.7rem" color='#939393' className='hover:fill-white'/>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/jonatanmds/' target='_blank' rel="noopener noreferrer">
              <FaLinkedin  size="1.7rem" color='#939393' className='hover:fill-white'/>
            </a>
          </li>
        </ul>
      </div>
      <Footer />
    </main>
  )
}

