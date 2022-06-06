import React from 'react';
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import ButtonGroup from './ButtonGroup'
import Totalizers from './Totalizers'
import ProductGroup from './ProductGroup'

const AddToCartInfo = () => {

  const productInfo = useProduct()
  const {orderForm:{
    items,totalizers
  }} = useOrderForm()

  console.log('productInfo',productInfo)
  console.log('orderForm',items,totalizers)

  return (
    <>
      <ProductGroup products={items}/>
      <Totalizers />
      <ButtonGroup />
    </>
  );
};

export default AddToCartInfo;
