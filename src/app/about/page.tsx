import Button from "@/components/Button";
import Footer from "@/patterns/Footer";
import Header from "@/patterns/Header";
import Image from "next/image";

export default function About(){
  return(
    <div className="w-full h-[100vh] flex flex-col justify-between md:px-20">
        <Header />
        <main className="px-6 md:px-0">
          <h1 className='text-center text-2xl md:text-4xl'>Sobre</h1>
          <section className='flex flex-col md:flex-row gap-8 justify-center items-center'>
            <div className="flex flex-col justify-center items-center gap-4">
            <Image
              className='rounded'
              src={"https://avatars.githubusercontent.com/u/49624271?v=4"}
              width={120}
              height={120}
              alt=''
          />
            <Button hasActions nameLabel='Download CV' />
          </div>
          <div className='flex flex-col items-center md:items-start md:w-[50%] gap-4'>
          <p>
              Trabalho com aplicações front-end, atuei durante um ano com a 
              maior base de dados do mercado imobiliário da América Latina na empresa Eemovel como 
              desenvolvedor FullStack, busco sempre me aprimorar e estar atualizado em novas 
              tecnologias do mercado
          </p>
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
          </div>
          </section>
        </main>
        <Footer />
      </div>
  )
}