import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import emailjs from '@emailjs/browser'

const createUserFormSchema = z.object({
  empresa: z.string().nonempty('Campo empresa obrigatório'),
  email: z.string().nonempty('Campo de email obrigatório').email('Formato de email não e válido'),
  assunto: z.string().nonempty('Campo assunto é obrigatório'),
})

type CreateUserFormData = z.infer<typeof createUserFormSchema>

export default function Form(){

  const {register, handleSubmit, formState: {errors}, watch, reset} = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema)
  })

  function emailSend(){
    
    const thisName = watch("empresa");
    const thisEmail = watch("email");
    const thisMessage = watch("assunto");
    
    const templateParams = {
      from_name: thisName,
      email: thisEmail,
      message: thisMessage
    }

    emailjs.send('service_g8071zl','template_0zimj26',templateParams,'m2paKAZL1VUQui6aR')
    .then((response)=>{
      reset(undefined , {keepValues: false})
      console.log('Email enviado', response.status, response.text)
    },(err)=>{
      console.log("Erro:", err)
    })
  }

  return(
    <div className="w-full flex flex-col md:flex-row md:justify-between items-center gap-6 px-[24px] lg:items-start md:px-[0px]">
      <section className="flex flex-col md:items-start text-base text-center md:text-start md:text-lg lg:text-xl">
        <h1>Fale comigo</h1>
        <p>Ficou interessado em meus trabalhos? entre em contato !</p>
      </section>
      <form onSubmit={handleSubmit(emailSend)}>
        <fieldset className="flex flex-col md:w-[20vw] text-sm lg:text-base">
          {/* <legend className="mb-6">Entre em contato</legend> */}
          <div className="flex flex-col">
            <label className="mb-2">Empresa</label>
            <input 
              className="rounded p-2 text-[#000]"
              type="text" 
              placeholder="Nome/Empresa"
              {...register('empresa')}
            >
            </input>
            {errors.empresa && <p className='text-[#ba184f] text-xs mt-1'>{errors.empresa.message}</p>}
          </div>
          <div className="flex flex-col">
          <label className="my-2">Email</label>
          <input 
            className="rounded p-2 text-[#000]"
            type="email" 
            placeholder="Email"
            {...register('email')}
          >
          </input>
          {errors.email && <p className='text-[#ba184f] text-xs mt-1'>{errors.email.message}</p>}
          </div>
          <div className="flex flex-col">
          <label className="my-2">Assunto</label>
          <textarea
            className="rounded p-2 text-[#000]"
            placeholder="Assunto"
            {...register('assunto')}
          >
          </textarea>
          {errors.assunto && <p className='text-[#ba184f] text-xs mt-1'>{errors.assunto.message}</p>}
          </div>
        </fieldset>
        <button className="w-full p-2 bg-[#1e2021] rounded mt-4 hover:bg-white hover:text-[#000]" type='submit'>Enviar</button>
      </form>
    </div>
  )
}