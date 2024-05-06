import './Footer.css';
import logo from './SESI.png'

function Footer1(){
    return(
        <div className='footer' >
            <p className='texto'>©2024 Todos os direitos reservados <br></br>Contato:(71)9-9999-9999</p>
           
            <img className='logo' src={require('./SESI.png')} 
 />
        </div>
    )
}
  export default Footer1;