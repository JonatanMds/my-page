export default function Hobbies(){

  return(
    <div>
      <ul className="flex gap-6">
        <li className="flex flex-col justify-end bg-[url('https://assets.turbologo.com/blog/pt/2019/10/19133658/youtube-logo-illustration.jpg')] bg-cover bg-no-repeat bg-center w-[120px] h-[220px] md:w-[190px] md:h-[290px] rounded text-xs">
          <div className="flex flex-col bg-[#121212] bg-opacity-60 p-2">
            <h1>Canal do Youtube</h1>
            <p>Um bate papo sobre programação</p>
          </div>
        </li>
        <li className="flex flex-col justify-end bg-[url('https://news.xbox.com/en-us/wp-content/uploads/sites/2/2023/06/Hero-4221fa2870a114f28fa1.jpg')] bg-cover bg-no-repeat bg-center w-[120px] h-[220px] md:w-[190px] md:h-[290px] rounded text-xs">
          <div className="flex flex-col bg-[#121212] bg-opacity-60 p-2">
            <h1>Games</h1>
            <p>Novidades e reviews</p>
          </div>
        </li>
      </ul>
    </div>
  )
}