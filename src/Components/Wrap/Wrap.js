import './Wrap.css'
import '../Stake/Stake.css'
import '../Navbar/Navbar.css'



function Wrap(){
    return(
        <div className="main">
            <div className="wrap">

                <div className="header">
           

                </div>

                <div className="stake-wrap">

                    <div className="stake-title">
                        <h1>Wrap / Unswrap (POHM) </h1>
                        <p>You can always wrap or unwrap whenever you want. </p>
                        </div>

                    <div className="stake-infos">
                        <div className="bubble-one">
                            <h1>sPOHM Price</h1>
                            <h2>$0</h2>
                        </div>
                        <div className="bubble-one">
                            <h1>Current Index</h1>
                            <h2>0 POHM</h2>
                        </div>
                        <div className="bubble-one">
                            <h1>POHM Price</h1>
                            <h2>$0</h2>
                        </div>

                    </div>

                    <div className="unstake-stake">
                        <h2>Wrap</h2>
                        <h2>Unwrap</h2>
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

                    <div className="list-final">
                        <div className="row-element">
                            <h5>Wrappable Balance</h5>
                            <h5>0 POHM</h5>
                        </div>
                        <div className="row-element">
                            <h5>Unwrappable  Balance</h5>
                            <h5>0 sPOHM</h5>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Wrap;