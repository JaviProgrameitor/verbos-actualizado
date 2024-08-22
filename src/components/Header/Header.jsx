import Logo from '../../assets/img/logo.png'

function Header() {
  return (
    <header className='h-[600px] bg-purple-400 px-4'>
      <div className='h-1/2 flex flex-col justify-center gap-2 text-center'>
        <h1 className='text-4xl font-fredoka'>Practica los verbos</h1>
        <p>Estudia y aprende algunos de los verbos más utilizados en el inglés de una manera muy divertida y fácil.</p>
      </div>
      <figure className='h-1/2'>
        <img 
          className='mx-auto' 
          src={Logo} 
          alt="Logo de la página" 
        />
      </figure>
    </header>
  )
}

export default Header