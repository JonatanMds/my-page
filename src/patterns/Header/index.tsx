import Link from "next/link";

export default function Header(){
  return(
    <div className="flex justify-between items-center p-6 w-full text-sm md:text-lg">
      <h1>Jonatan</h1>
      <ul className="flex gap-4">
        <li className="p-2"><Link href={"/"}>Home</Link></li>
        <li className="p-2"><Link href={"/about"}>Sobre</Link></li>
      </ul>
    </div>
  )
}