import Image from "next/image";

export default function CardInProgress(){

  const urlImage = 'https://img.freepik.com/vetores-gratis/coworking-eficaz-uniao-de-colegas-colaboracao-dos-trabalhadores-regulamentacao-do-trabalho-em-equipe-aumento-da-eficiencia-do-fluxo-de-trabalho-mecanismo-de-organizacao-dos-membros-da-equipe_335657-1623.jpg?w=2000'
  return(
    <div className="w-56 h-20 flex justify-around items-center bg-[#202020] rounded">
      <Image
      className='rounded-xl'
      src={urlImage}
      height={40}
      width={60}
      alt=''
      />
      <p>Em progresso...</p>
    </div>
  )
}