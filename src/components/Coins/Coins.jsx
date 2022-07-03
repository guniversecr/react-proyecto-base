import React from 'react';
import '../../styles/Coins.css';

const Coins = ({ name, image, symbol, price, priceChange, marketcap }) => {

  let coinName = name.toLowerCase();
  
  return (

    <div className="coins__table">
        
        <div className="coin__row">

          <div className="coin">
            <img src={ image } alt="crypto"/>
            <h1>{ coinName }</h1>
            <p className="coin__symbol">{ symbol }</p>
          </div>

          <div className="coin__data">
              <p className="coin__price">${ price }</p>
              { priceChange < 0 ? (
                <p className="coin__percent red">{ priceChange.toFixed( 2 ) }%</p>
              ) : (<p className="coin__percent green">{ priceChange.toFixed( 2 ) }%</p>)
            } 
            <p className="coin__marketcap">
              Cap Mercado: ${ marketcap.toLocaleString() }
            </p>
          </div>

        </div>
    
    </div>
  
  )};

export default Coins;