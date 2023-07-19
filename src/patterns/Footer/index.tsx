export default function Footer(){
  return(
    <div id='contactme' className='w-full flex justify-around items-center gap-8 p-8'>
        <ul className='flex gap-4 text-[#939393]'>
          <li className='p-1 hover:text-white'><a href='https://www.linkedin.com/in/jonatanmds/' target='_blank' rel="noopener noreferrer">LinkedIn</a></li>
          <li className='p-1 hover:text-white'><a href='https://github.com/JonatanMds' target='_blank' rel="noopener noreferrer">GitHub</a></li>
          <li className='p-1 hover:text-white'><a href='mailto:marques.jonatands@gmail.com?subject=Fale comigo&body=' target='_blank' rel="noopener noreferrer">Email</a></li>
        </ul>
      </div>
  )
}