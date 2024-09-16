import React from 'react';

function ProductCard({ product }) {
  const handleOrder = () => {
    const whatsappLink = `https://wa.me/+5521984063033?text=Eu%20quero%20comprar%20${encodeURIComponent(product.name)}%20por%20${product.price}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <button onClick={handleOrder}>Fazer Pedido</button>
    </div>
  );
}

export default ProductCard;
