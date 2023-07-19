import Button from "@/components/Button";
import CardInProgress from "@/components/CardInProgress";

export default function Projetos(){

  return(
    <div className='w-full flex gap-4'>
        <ul className='flex flex-col gap-4 hidden md:flex'>
          <li> <CardInProgress /></li>
          <li><CardInProgress /></li>
          <li><CardInProgress /></li>
        </ul>
        <ul className="w-full flex flex-col justify-end bg-[url('https://www.viacaomouraoense.com.br/site/banner_manutencao.jpg')] bg-contain rounded">
          <li>
            <div className='flex flex-col gap-2 bg-[#101010a6] p-6'>
              <h1>Descrição</h1>
              <p className='text-sm'>Em Manutenção</p>
              <div>
                <Button nameLabel='GitHub'/>
              </div>
            </div>
          </li>
        </ul>
        </div>
  )
}