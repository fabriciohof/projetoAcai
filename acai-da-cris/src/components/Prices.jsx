import React from 'react';
import picole from '../assets/picole.jpg'; 



function Prices() {
  return (
    <div className="prices-section">
      <h2>Tabela de Preços - Açaí</h2>
      <table className="prices-table">
        <thead>
          <tr>
            <th>Tamanho</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>300ml</td>
            <td>R$ 10,00</td>
          </tr>
          <tr>
            <td>500ml</td>
            <td>R$ 14,00</td>
          </tr>
          <tr>
            <td>700ml</td>
            <td>R$ 18,00</td>
          </tr>
          
        </tbody>
      </table> 
      
      <div className="additional-info">
        <h1>Em breve teremos picolé!</h1>
      </div>
      <div className="image-container">

      <img src={picole} alt="Picolé" className="açai-image" />
      </div>
    </div>
    
    
  );
  
}

<div className='picole'>
    <h1>Em breve teremos picolé</h1>
    </div>

export default Prices;
