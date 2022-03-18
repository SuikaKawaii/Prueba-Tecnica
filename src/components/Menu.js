import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { A, Brand, Check, DivA, DivCard, DivIngredients, DivSelect, Items, Logout, NameIngredient, Price, Quantity, Rissoto, Title } from '../styled/MenuStyled'
import Bill from './Bill';
import {BiLogOut} from 'react-icons/bi'
import { logoutAsyn } from '../redux/actions/loginAction';
import { listAsyn } from '../redux/actions/menuActions';
import { addAsyn, deleteAsyn } from '../redux/actions/billAction';
import { decrementSyn, incrementSyn } from '../redux/actions/countAction';

const Menu = () => {

  const dispatch = useDispatch();
  const [check, setCheck] = useState(false)
  const [val, setVal] = useState({
    check: '',
    items: ''
  })

  const {ingredients} = useSelector(store => store.ingredients)

  
  const Listar = () => {
    dispatch(listAsyn())
  }
  useEffect(() => {
      Listar()
  }, [])
  const handleCheck = ({target}) => {
    console.log(target.value);
    
    if(check === false){
      setCheck(true)
      setVal({
        ...val,
        [target.name]: target.value
      })
      // addPrice(val)
      
    }else{
      setCheck(false)
      // deletePrice(val)
    }
    console.log(val);
  }
  const addPrice = (val) => {
    dispatch(addAsyn(val))
    dispatch(incrementSyn(val))
  }
  const deletePrice = (val) => {
    dispatch(deleteAsyn(val))
    dispatch(decrementSyn(val))
  }
  const handleLogout = () => {
    dispatch(logoutAsyn())
  }
 
  return (
    <div>
        <form>
          <div>
            <div>
              <Logout
                onClick={handleLogout}
                to="">
                  <BiLogOut/>
              </Logout>
            </div>
            <div>
              <Title>INGREDIENTES</Title>
              <Rissoto>Rissoto de setas</Rissoto>
            </div> 
          </div>         
          <DivA>
            <A>Seleccionar todo |</A>
            <A> Deseleccionar todo</A>
          </DivA>
          <hr/>
          <DivSelect>
            {
              ingredients.map((i, index) =>(
                <DivCard key={index}>
                    <Check type='checkbox'
                      onChange={handleCheck}
                      name='check' 
                      value={i.price} 
                    />
                    <Items placeholder={i.items}
                      name= 'items'
                      value={i.items}
                      onChange={handleCheck}
                    />                    
                    <NameIngredient>
                      {i.product}
                    </NameIngredient>
                    <Brand>{i.brand}</Brand>
                    <Quantity>{i.quantity}</Quantity>                    
                    <Price>{i.price}</Price>                

                </DivCard>
              ))
            }            
          </DivSelect>
          {/* <Bill/> */}
        </form>        
    </div>
  )
}

export default Menu