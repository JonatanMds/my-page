import Link from "next/link";

export default function Header(){
  return(
    <nav className="flex justify-between items-center p-6 w-full text-sm md:text-lg">
      <p><Link href={"/"}>Jonatan</Link></p>
      <ul className="flex gap-4">
        <li className="p-2"><Link href={"/"}>Home</Link></li>
        <li className="p-2"><Link href={"/about"}>Sobre</Link></li>
      </ul>
    </nav>
  )
}