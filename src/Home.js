import './Home.css'

function Home1 (){
    return(
        <div className="corpo">
            <h2 className='titulo'>Bem-vindo a Página Inicial da AV2</h2>
            <p className='sub-titulo'>Agora vai!</p>
            <img className='Foto' src={require('./FOTO5.jpg')} />
            <img className='Foto' src={require('./FOTO6.jpg')} />
            <img className='Foto' src={require('./FOTO7.jpg')} />
            <img className='Foto' src={require('./HOME.jpg')} />
            <h4 className='texto1'>Vista de cima Cimatec Park</h4>
            <h4 className='texto2'>Portaria Senai Cimatec</h4>
            <h4 className='texto3'>Portaria SESI Saude Piatã</h4>
            <h4 className='texto4'>Portaria SESI Piatã</h4>
        </div>
    )
}

export default Home1;