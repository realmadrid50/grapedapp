import '../Stake/Stake.css'
import '../Navbar/Navbar.css'
import './Discount2.css'
import '../Discount/Discount.css'
import USDC from '../../Media/usdc.svg'
import zKronos from '../../Media/pair.svg'

function Discount2(){
    return(
        <div className="main">
            <div className="wrap">

                <div className="header">

                </div>

                <div className="stake-card">

                    <div className="lp-title">
                        <img src={USDC}></img>
                        <img src={zKronos} id="l"></img>
                        <h1>zKronos-USDC LP</h1>
                        
                    </div>

                    <div className="stake-infos">
                        <div className="bubble-one">
                            <h1>Bond Price</h1>
                            <h2>USDC</h2>
                        </div>
                        <div className="bubble-one">
                            <h1>zKronos Price</h1>
                            <h2>$0</h2>
                        </div>
                    </div>

                    <div className="unstake-stake">
                        <h2>Bond</h2>
                        <h2>Redeem</h2>
                    </div>
                    <div className="amount-input">

                        <div className="item-1">
                            <div className='max'><h3>Max</h3></div>
                            <input type="number" placeholder="Amount"></input>

                        </div>
                        <div className="item-2">

                            <button>Approve</button>
                            
                        </div>
                    </div>

                    <div className="paragraph">
                        <p>Note: The "Approve" transaction is only needed when bonding for the first time; 
                            subsequent minting only requires you to perform the "Bond" transaction.</p>
                    </div>

                    <div className="list-final">
                        <div className="row-element">
                            <h5>Your Balance</h5>
                            <h5>0 USDC</h5>
                        </div>
                        <div className="row-element">
                            <h5>Your Will Get</h5>
                            <h5>0 zKronos</h5>
                        </div>
                        <div className="row-element">
                            <h5>Vesting Term</h5>
                            <h5>0 days</h5>
                        </div>
                        <div className="row-element">
                            <h5>Minimum Purchase</h5>
                            <h5>0 zKronos</h5>
                        </div>
                        <div className="row-element">
                            <h5>ROI 5-Day Rate</h5>
                            <h5>0%</h5>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Discount2;