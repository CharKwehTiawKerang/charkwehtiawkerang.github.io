import React, { useEffect } from 'react'

const Shop = () => {

  useEffect(() => {
    document.title = "Shop | Red Blazer";
  }, []);

  return (
    <div>Shop</div>
  )
}

export default Shop