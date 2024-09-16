import React, { useState } from 'react';


const complements = [
  'Granola',
  'Amendoim',
  'Granulado colorido',
  'Leite em Pó',
  'Paçoca'
];

const toppings = [
  'Chocolate',
  'Morango',
  'Caramelo',
  'Blue Ice',
  'Limão',
  'Uva'
];

function Order() {
  const [selectedComplements, setSelectedComplements] = useState([]);
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('Açaí Tradicional');

  const handleComplementChange = (event) => {
    const value = event.target.value;
    setSelectedComplements((prev) =>
      prev.includes(value)
        ? prev.filter((complement) => complement !== value)
        : [...prev, value]
    );
  };

  const handleToppingChange = (event) => {
    const value = event.target.value;
    setSelectedToppings((prev) =>
      prev.includes(value)
        ? prev.filter((topping) => topping !== value)
        : [...prev, value]
    );
  };

  const handleOrder = () => {
    const complementText = selectedComplements.join(', ');
    const toppingText = selectedToppings.join(', ');
    const whatsappMessage = `Olá, gostaria de pedir um ${selectedProduct} com os seguintes complementos: ${complementText} e cobertura de: ${toppingText}.`;
    const whatsappLink = `https://wa.me/+5521984063033?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappLink, '_blank');
  };


  return (
    <div className="order">
      <h2>Faça seu Pedido</h2>
      <div className="order-container">
        <div className="order-section">
          <h3>Escolha seu Açaí:</h3>
          <select
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
          >
            <option>Açaí Tradicional</option>
            <option>Açaí com Banana</option>
            <option>Açaí com Morango</option>
            <option>Açaí com Oreo</option>

          </select>
        </div>
        <div className="order-options">
          <div className="order-complements">
            <h3>Escolha os Complementos:</h3>
            {complements.map((complement, index) => (
              <div key={index}>
                <label>
                  <input
                    type="checkbox"
                    value={complement}
                    onChange={handleComplementChange}
                    checked={selectedComplements.includes(complement)}
                  />
                  {complement}
                </label>
              </div>
            ))}
          </div>
          <div className="order-toppings">
            <h3>Escolha as Coberturas:</h3>
            {toppings.map((topping, index) => (
              <div key={index}>
                <label>
                  <input
                    type="checkbox"
                    value={topping}
                    onChange={handleToppingChange}
                    checked={selectedToppings.includes(topping)}
                  />
                  {topping}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="order-buttons">
          <button onClick={handleOrder} className="order-button">
            Fazer Pedido
          </button>
          <h5>Ao clicar no botão acima você sera redirecionado ao nosso WhatsApp</h5>
          <h5>O pagamento é feito por lá</h5>
        </div>
      </div>
    </div>
  );
}

export default Order;
