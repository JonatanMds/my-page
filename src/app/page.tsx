"use client"; // This is a client component 👈🏽
import axios from 'axios'
import Image from 'next/image';
import { useEffect, useState } from 'react'
import CardInProgress from '@/components/CardInProgress';
import {FaGithub, FaLinkedin, FaYoutube} from "react-icons/fa"
import Header from '@/patterns/Header';
import Footer from '@/patterns/Footer';
import Button from '@/components/Button';


type Users = {
  login: string,
  name: string,
  avatar_url: string,
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
    <main className="flex min-h-screen flex-col items-center gap-28 px-20">
      
      {/* Header */}
      <Header name={user?.name!}/>

      {/* I'm jonatan */}
      <div className='w-full h-[50vh] flex justify-around'>
        <div className='w-[50%] flex flex-col gap-4'>
          <div>
            {/*eslint-disable-next-line react/no-unescaped-entities */}
            <h1 className='text-5xl'>I'm Jonatan</h1>
            <p className='text-sm text-[#939393]'>ReactJS | NextJs | TypeScript | NodeJs</p>
          </div>
          <h2 className='text-2xl'>Frontend developer</h2>
          <p className='text-sm'>Trabalho com aplicações front-end, atuei durante um ano com a 
            maior base de dados do mercado imobiliário da América Latina na empresa Eemovel como 
            desenvolvedor FullStack, busco sempre me aprimorar e estar atualizado em novas 
            tecnologias do mercado
          </p>
          {/* <div>
              <Button nameLabel='Contact Me'/>
          </div> */}
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
            {/* <li>
              <a href='/' target='_blank' rel="noopener noreferrer" >
                <FaYoutube size="1.7rem"/>
              </a>  
            </li> */}
          </ul>
        </div>
        <div>
          <Image
            className='rounded-full'
            src={user?.avatar_url!}
            width={250}
            height={250}
            alt=''
          />
        </div>
      </div>
      
      {/* Projetos */}
      <div className='w-full flex flex-col gap-4 items-center'>
        <h1 className='text-4xl'>Projetos</h1>
        <div className='w-full flex gap-4'>
        <ul className='flex flex-col gap-4 '>
          <li> <CardInProgress /></li>
          <li><CardInProgress /></li>
          <li><CardInProgress /></li>
        </ul>
        <div className="w-full flex flex-col justify-end bg-[url('https://www.viacaomouraoense.com.br/site/banner_manutencao.jpg')] bg-contain rounded">
          <div className='flex flex-col gap-2 bg-[#101010a6] p-6'>
            <h1>Descrição</h1>
            <p className='text-sm'>Em Manutenção</p>
            <div>
              <Button nameLabel='GitHub'/>
            </div>
          </div>
        </div>
      </div>
       
      </div>
     
     
      {/* ABOUTME */}
      <section id='about'>
        <h1 className='pb-8 text-center text-4xl'>Sobre</h1>
        <div className='flex gap-8 justify-center items-center'>
          <Image
            className='rounded'
            src={user?.avatar_url!}
            width={250}
            height={250}
            alt=''
        />
        <div className='flex flex-col gap-4'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus illum quasi dignissimos, soluta culpa, illo architecto exercitationem deleniti, ipsum itaque odit fuga eos placeat aspernatur dolores beatae dicta maiores distinctio!</p>
        <ul className='flex gap-4'>
          <li className='text-center'>
            <h1 className='text-xl'>01+</h1>
            <p className='text-[#939393]'>Yers experience</p>
          </li>
          <li className='text-center'>
            <h1  className='text-xl'>01+</h1>
            <p className='text-[#939393]'>Companies</p>
          </li>
        </ul>
        <div>
          <Button hasActions nameLabel='Download CV' />
        </div>
        </div>
        
        </div>
      </section>

      {/* hobbies */}
      <section id='hobbies' className='flex flex-col items-center gap-8'>
        <h1 className='text-4xl'>Hobbies</h1>
        <ul className='flex gap-4'>
          <li className="w-56 h-72 rounded bg-[url('https://www.viacaomouraoense.com.br/site/banner_manutencao.jpg')] bg-contain hover:duration-200 hover:shadow-lg hover:shadow-[#363636]"></li>
          <li className="w-56 h-72 rounded bg-[url('https://www.viacaomouraoense.com.br/site/banner_manutencao.jpg')] bg-contain hover:duration-200 hover:shadow-lg hover:shadow-[#363636]"></li>
        </ul>         
        
      </section>
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
