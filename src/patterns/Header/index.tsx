import Link from "next/link";

export default function Header(){
  return(
    <div className="flex justify-between p-6 w-full text-sm md:text-lg">
      <h1>Jonatan</h1>
      <ul className="flex gap-2">
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/about"}>Sobre</Link></li>
      </ul>
    </div>
  )
}