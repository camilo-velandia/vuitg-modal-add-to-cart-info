import React from 'react';

const ProductGroup = ({products}:any) => {
  return (
    <div>
      {
        products.map((item:any, index:number)=>{
          console.log('item',item)
          return(
            <div key={index}>
              <div>
                <img src={item.imageUrls.at1x} alt="" />
              </div>
              <div>
                <p>{item.name}</p>
                <p>{item.id}</p>
                <p>${item.price / 100}</p>
                <p>cant: {item.quantity}</p>
              </div>
            </div>
          )
        })
      }
      listado de prods
    </div>
  );
};

export default ProductGroup;
