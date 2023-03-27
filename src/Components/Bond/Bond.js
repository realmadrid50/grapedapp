import './Bond.css'
import '../Stake/Stake.css'
import '../Navbar/Navbar.css'



function Bond(){
    return(
        <div className="main">
            <div className="wrap">

                <div className="header">

                </div>

                <div className="stake-bond">

                    <div className="bond-title">
                        <h1>Bond (4, 4)</h1>
                        <p>The bonds are closed now, but if you bonded before,
                             you can still claim your tokens whenever you want.</p>
                    </div>

                    <div className="bond-infos">
                        <div className="bubble-one">
                            <h1>Treasury Balance</h1>
                            <h2>$0</h2>
                        </div>
                        <div className="bubble-one">
                            <h1>zKronos Price</h1>
                            <h2>$0</h2>
                        </div>
                    </div>

                    <div className="bond-details">
                        <div className='case'>
                            <h2>Bond</h2>
                        </div>
                        <div className='cage'>
                            <h2>Price</h2>
                        </div>
                        <div className='cage'>
                            <h2>ROI</h2>
                        </div>
                        <div className='cage'>
                            <h2>Purchased</h2>
                        </div>
                        <div className='cage'>
                            <h2></h2>
                        </div>
                    </div>
                    <div className="bond-subdetails">

                        <div className='case1'>

                            <h2>zKronos-USDC LP</h2>

                        </div>

                        <div className='cage1'>
                            <h2>$0.00</h2>
                        </div>
                        <div className='cage1'>
                            <h2>0</h2>
                        </div>
                        <div className='cage1'>
                            <h2>$0</h2>
                        </div>
                        <div className='cage1'>
                            <button>Bond</button>
                        </div>
                    </div>
                    

                </div>


                <div className="stake-one">

                    <div className="bond-title">
                        <h1>Bond (1, 1)</h1>

                    </div>


                    <div className="bond-details">
                        <div className='case'>
                            <h2>Bond</h2>
                        </div>
                        <div className='cage'>
                            <h2>Price</h2>
                        </div>
                        <div className='cage'>
                            <h2>ROI</h2>
                        </div>
                        <div className='cage'>
                            <h2>Purchased</h2>
                        </div>
                        <div className='cage'>
                            <h2></h2>
                        </div>
                    </div>
                    <div className="bond-subdetails">

                        <div className='case1'>

                            <h2>zKronos-USDT LP</h2>

                        </div>

                        <div className='cage1'>
                            <h2>$0.00</h2>
                        </div>
                        <div className='cage1'>
                            <h2>0</h2>
                        </div>
                        <div className='cage1'>
                            <h2>$0</h2>
                        </div>
                        <div className='cage1'>
                            <button>Bond</button>
                        </div>
                    </div>
                    <div className="bond-subdetails">

                        <div className='case1'>

                            <h2>zKronos-FRAX LP</h2>

                        </div>

                        <div className='cage1'>
                            <h2>$0.00</h2>
                        </div>
                        <div className='cage1'>
                            <h2>0</h2>
                        </div>
                        <div className='cage1'>
                            <h2>$0</h2>
                        </div>
                        <div className='cage1'>
                            <button>Bond</button>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
}

export default Bond;