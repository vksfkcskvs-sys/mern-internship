import React, { useState } from 'react';

const ProductCard = () => {
  const [cart, setCart] = useState(0);
  const [liked, setLiked] = useState(false);
  const stockLimit = 3;

  const addToCart = () => {
    if (cart < stockLimit) {
      setCart(cart + 1);
    }
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0 }}>Basic T-Shirt</h3>
        <button onClick={() => setLiked(!liked)} style={{ background: 'none', border: 'none', fontSize: '20px' }}>
          {liked ? '❤️' : '🤍'}
        </button>
      </div>
      <p style={{ margin: 0 }}>Items in cart: {cart}</p>
      <button 
        className="primary"
        onClick={addToCart} 
        disabled={cart >= stockLimit}
        style={{ opacity: cart >= stockLimit ? 0.5 : 1 }}
      >
        {cart >= stockLimit ? 'Sold Out' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;