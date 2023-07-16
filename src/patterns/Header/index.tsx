import Link from "next/link";

type Users = {
  name: string;
}

export default function Header({name}:Users){
  return(
    <header className="w-full flex justify-between pt-6 text-[#101010] text-lg">
    <h1 className='text-[#939393] hover:text-white'>{name}</h1>
    <nav>
      <ul className="flex gap-2 text-[#939393]">
        <li className='p-1 hover:text-white'><Link href={'/'}>Home</Link></li>
        <li className='p-1 hover:text-white'><Link href={'/projeto'}>Projetos</Link></li>
        <li className='p-1 hover:text-white'><Link href={'#about'}>Sobre</Link></li>
        <li className='p-1 hover:text-white'><Link href={'#hobbies'}>Hobbies</Link></li>
        <li className='p-1 hover:text-white'><Link href={'#contactme'}>Contato</Link></li>
      </ul>
    </nav>
  </header>
  )
}