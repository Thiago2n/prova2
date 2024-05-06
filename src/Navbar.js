import './Navbar.css'
import { Link } from 'react-router-dom';
    
    function Navbar1(){
        return(
            <nav className="navbar">
                <ul className="lista">
                <img className='logo' src={require('./SENAI.png')}  /> 
                    <li className="item">
                    
                        <Link className="item" to="/"><h4>Home</h4></Link>
                    </li>
                    <li className="">
                        <Link className="item" to="/quemsomos"><h4>Quem Somos?</h4></Link>
                    </li>
                    <li className="">
                        <Link className="item" to="/contato"><h4>Contato</h4></Link>
                    </li>
                </ul>
            </nav>
        )
    }
    
    
export default Navbar1;