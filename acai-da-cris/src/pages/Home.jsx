import React from 'react';
import acaiTradicional from '../assets/acainormal.png'; 
import acaiBanana from '../assets/acaibanana.png'; 
import acaiMorango from '../assets/acaimorango.png'; 
import acaiOreo from '../assets/acaioreo.png'; 


function Home() {
  return (
    <div className="home">
      <div className="container-home">
        <h1>Bem-vindo ao Açaí da Cris!</h1>
        <h3>Pronto para experimentar o melhor açaí do bairro?</h3>
         <h4>Peça agora e descubra por que nossos clientes estão sempre voltando para mais. Deixe o Açaí da Cris transformar seu dia com um toque de frescor e sabor.</h4>
      </div>

      <section className='hours'>
      <h2>Horário de funcionamento</h2>
      <div class="date-actual" id='date-actual'>
      <span>Terça a Sábado: 14h às 19h</span>
     </div>

      </section>
      <section className="açai-types">
        <h1>Nossos Tipos de Açaí</h1>
        <div className="açai-container">
          <div className="açai-item">
            <h3>Açaí Tradicional</h3>
            <img src={acaiTradicional} alt="Açaí Tradicional" className="açai-image" />
            <p>O clássico açaí</p>
          </div>
          <div className="açai-item">
            <h3>Açaí de Banana</h3>
            <img src={acaiBanana} alt="Açaí com banana" className="açai-image" />
            <p>Açaí batido com banana</p>
          </div>
          <div className="açai-item">
            <h3>Açaí de morango</h3>
            <img src={acaiMorango} alt="Açaí de morango" className="açai-image" />
            <p>Açaí batido com morango</p>
          </div>
          <div className="açai-item">
            <h3>Açaí de oreo</h3>
            <img src={acaiOreo} alt="Açaí de oreo" className="açai-image" />
            <p>Açaí batido com oreo</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
