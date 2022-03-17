import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Div, Envio, Item, Span, Subtotal, Total, Comprar, B } from '../styled/BillStyled'

const Bill = () => {
  
  const [subT, setSubT] = useState([])
  const {ingredients} = useSelector(store => store.ingredients)
  console.log(ingredients);
  useEffect(() => {
    // setSubT(price)
    sumaFunction(subT)
  }, [])
  // console.log(subT);
  const envio = 7.00

  const sumaFunction = (subT) => {
    const suma = subT + envio
    console.log(suma);
  }
  

  return (
    <div>
        <Div>
          {
            ingredients.forEach((i, index) => (
              <div key={index}>
                <Item>Items: <B>{i.items+1}</B></Item>
            <Subtotal>Subtotal <Span>{i.price} €</Span></Subtotal>
            <Envio>Gastos de envío <Span>7.00 €</Span></Envio>
            <Total>Total <Span> €</Span></Total>
            <Comprar type='button'>Compra ingredientes: 52364 €</Comprar>
              </div>
            ))
          }
            <Item>Items: <B>1</B></Item>
            <Subtotal>Subtotal <Span> €</Span></Subtotal>
            <Envio>Gastos de envío <Span> €</Span></Envio>
            <Total>Total <Span> €</Span></Total>
            <Comprar type='button'>Compra ingredientes: 52364 €</Comprar>
        </Div>
    </div>
  )
}

export default Bill