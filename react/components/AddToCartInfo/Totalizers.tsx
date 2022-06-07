import React from 'react';

type Total = {
  id: string
  name: string
  value: number
}

const Totalizers = (props: { totalizers: Total; items: any}) => {

  const {totalizers,items} = props
  const {value} = totalizers || {id: '', name:'',value:0}

  return (
    <div>
      <p>Tenemos {items.length} items en tu compra</p>
      <p>total: ${value/100}</p>
    </div>
  );
};

export default Totalizers;
