import React from 'react';
import { generateBlockClass } from '@vtex/css-handles'
import styles from './styles.css'

const ProductGroup = ({products, blockClass}:any) => {

  const container__item = generateBlockClass(styles.container__item, blockClass)


  return (
    <div>
      {
        products.map((item:any, index:number)=>{
          console.log('item',item)
          return(
            <div key={index} className={container__item}>
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
    </div>
  );
};

export default ProductGroup;
