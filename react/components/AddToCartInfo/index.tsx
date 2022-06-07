import React from 'react';
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import ButtonGroup from './ButtonGroup'
import Totalizers from './Totalizers'
import ProductGroup from './ProductGroup'
import { generateBlockClass } from '@vtex/css-handles'
import styles from './styles.css'

const AddToCartInfo = ({ blockClass }: {blockClass:string}) => {

  const productInfo = useProduct()
  const {orderForm:{
    items,totalizers
  }} = useOrderForm()
  const container = generateBlockClass(styles.container, blockClass)

  console.log('productInfo',productInfo)
  console.log('orderForm',items,totalizers)

  return (
    <div className={container}>
      <ProductGroup products={items}/>
      <Totalizers totalizers={totalizers[0]} items={items} />
      <ButtonGroup />
    </div>
  );
};

export default AddToCartInfo;
