type Label = {
  nameLabel: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  hasActions ?: boolean
}

export default function Button({nameLabel, onClick, hasActions = false}:Label){

  const urlToDownloadCv = 'https://drive.google.com/uc?export=download&id=1yNtljvAsmq4RfSiW9-GIizAnXv2HTJEc'

  return(
    <button onClick={onClick} className='text-white border-solid border border-white p-2 rounded-lg hover:bg-[#363636]'>
      {hasActions?(
        <a className="w-full md:px-6" href={urlToDownloadCv}>{nameLabel}</a>
      ):nameLabel}
    </button>
  )
}