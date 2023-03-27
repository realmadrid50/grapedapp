import { Link } from 'react-router-dom';
import Logo from '../../Media/Logo.svg'
import Dash from '../../Media/bond.svg'
import Stake from '../../Media/stake.svg'
import Wrap from '../../Media/wrap.svg'
import Docs from '../../Media/docs.svg'
import Governance from '../../Media/governance.svg'
import Github from '../../Media/github.svg'
import Twitter from '../../Media/twitter.svg'
import { FaBars, FaTimes } from "react-icons/fa";
import {useRef} from "react";
import Medium from '../../Media/medium.svg'
import './Nav.css'
import Bond from '../Bond/Bond';


function Nav() {


    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
  
     return (
        <div className='top'>
            <nav ref={navRef}>
                <div className="logo">
                    <img src={Logo} id='logo' alt="Logo"></img>
                </div>
                <div className='list'>
                    <img src={Dash}></img>
                    <Link to="/">Dashboard</Link>
                </div>
                <div className='list'>
                    <img src={Stake}></img>
                    <Link to="/stake">Stake</Link>
                </div>
                <div className='list'>
                    <img src={Wrap}></img>
                    <Link to="/wrap">Wrap</Link>
                </div>
                <div className='list'>
                    <img src={Dash}></img>
                    <Link to="/bond">Bond</Link>
                </div>
                
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>

                    <FaTimes/>

                </button>
                <div className="mobile-tag">
                    <ul>
                        <li>
                            <img src={Docs} alt="dash"></img>
                            <a href="#">Docs</a>                    
                        </li>
                        <li>
                            <img src={Governance} alt="dash"></img>
                            <a href="#">Governance</a>                    
                        </li>
                    </ul>
                </div>
            </nav>
            <button  className="nav-btn"  onClick={showNavbar}>
                <FaBars/>
            </button>
        </div>
    );
}

export default Nav;
