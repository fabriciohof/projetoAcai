import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Açaí com Frutas', price: 'R$ 10,00' },
  { id: 2, name: 'Açaí com Granola', price: 'R$ 14,00' },
  { id: 3, name: 'Açaí com Leite Condensado', price: 'R$ 18,00' },
];

function ProductList() {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
