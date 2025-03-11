import EnergizeX from './assets/EnergizeX.svg';
import compras from './assets/compras.svg';
import Login from './assets/Login.svg';
import buscar from './assets/buscar.svg';
import './styles.css'

export default function Header () {
    return(
        <header className='header'>
            <div className='logo'>
                <img src={EnergizeX} alt='Logo da Energizex' />
            </div>
            <nav className='nav-links'>
                <ul>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li>
                        <a href="#">
                            <img src={buscar} alt='Ícone de pesquisa' className='search-icon'/>
                            <span>Search</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className='user-options'>
                <ul>
                    <li>
                        <a href="#">
                            <span>Login</span>
                            <img src={Login} alt='Ícone de Login' className='icon' />
                        </a>
                    </li>
                    <li> 
                        <img src={compras} alt='Compras'/>
                    </li>
                </ul>
            </div>
        </header>
    )
}