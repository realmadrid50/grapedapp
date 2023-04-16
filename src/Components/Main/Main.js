import './Main.css'
import '../Stake/Stake.css'
import '../Navbar/Navbar.css'

function Main() {

    return (

        <div className="main">
            <div className="wrap">   

                <div className="header">
                    

                </div>         

                <div className="card-wrapper">

                    <div className='bubble'>
                        <h2>LEVIA Lifetime</h2>
                        <h1>0 Days</h1>
                    </div>

                    
                    <div className='bubble'>
                        <h2>LEVIA Price</h2>
                        <h1>$0</h1>
                    </div>

                    
                    <div className='bubble'>
                        <h2>Market Cap</h2>
                        <h1>$0</h1>
                    </div>

                </div>

                <div className='second-card-wrapper'>
                    <div className='card-bubble'>
                        <h2>Current APY</h2>
                        <h1>%</h1>
                    </div>
                    <div className='card-bubble'>
                        <h2>Next Epoch</h2>
                        <h1>$0</h1>
                    </div>
                </div>

                <div className='second-card-wrapper'>
                    <div className='card-tetris'>
                        <h2>ETH Liquidity Value</h2>
                        <h1>0 ETH</h1>
                    </div>
                    <div className='card-tetris'>
                        <h2>Treasury Assets</h2>
                        <h1>$0</h1>
                    </div>
                    <div className='card-tetris'>
                        <h2>Current Index</h2>
                        <h1>0</h1>
                    </div>
                </div>


            </div>
        </div>
    );
}
  


export default Main;
  