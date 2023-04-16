import './Navbar.css'
import Logo from '../../Media/logo.jpg'
import Dash from '../../Media/bond.svg'
import Stake from '../../Media/stake.svg'
import Wrap from '../../Media/wrap.svg'
import Docs from '../../Media/docs.svg'
import Governance from '../../Media/governance.svg'
import Github from '../../Media/github.svg'
import Twitter from '../../Media/twitter.svg'
import Medium from '../../Media/medium.svg'
import { Link } from 'react-router-dom';
import Media from '../../Media/NewBg.svg'
function Navbar() {
    return (

        <div className='SideNav'>
            
            <div className="logo">
                <img src={Logo} alt="Logo" ></img>
            </div>

            <ul className="ul-one">
                <li>
                    <img src={Dash} alt="dash"></img>
                    <Link to="/">Dashboard</Link>
                </li>
                <li>
                    <img src={Stake} alt="dash"></img>
                    <Link to="/stake">Stake</Link>
                </li>
                <li>
                    <img src={Wrap} alt="dash"></img>
                    <Link to="/wrap">Wrap</Link>

                </li>
                <li>
                    <img src={Dash} alt="dash"></img>
                    <Link to="/bond">Bond</Link>
              
                </li>
                <ul className="inside">

                    <li>
                        <Link to="/usdc">Bond Discounts</Link>
                    </li>
                    <li>
                        <a href="#">USDC</a>
                    </li>
                    <li>
                        <Link to="/usdc_snow_lp">LEVIA-USDC LP</Link>

                    </li>
                </ul>   
            </ul>



            <ul className="ul-two">
                <li>
                    <img src={Docs} alt="dash"></img>
                    <a href="#">Docs</a>                    
                </li>
                <li>
                    <img src={Governance} alt="dash"></img>
                    <a href="#">Governance</a>                    
                </li>

                <div className="socials">
                    <img src={Github} alt="dash"></img>
                    <img src={Twitter} alt="dash"></img>
                    <img src={Medium} alt="dash"></img>


                </div>

            </ul>
            
        </div>
    );
}
  


export default Navbar;
  