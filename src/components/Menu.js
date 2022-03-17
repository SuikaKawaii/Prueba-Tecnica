import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAsyn, addSyn, listAsyn, sumaSyn } from '../redux/actions/menuActions';
import { A, Brand, Check, DivA, DivCard, DivIngredients, DivSelect, Items, Logout, NameIngredient, Price, Quantity, Rissoto, Title } from '../styled/MenuStyled'
import Bill from './Bill';
import {BiLogOut} from 'react-icons/bi'
import { logoutAsyn } from '../redux/actions/loginAction';

const Menu = () => {

  const dispatch = useDispatch();
  const [check, setCheck] = useState(true)
  const [val, setVal] = useState({
    price: '',
    items: ''
  })

  const {ingredients} = useSelector(store => store.ingredients)
  const {price} = useSelector(store => store.ingredients)
  console.log((ingredients));
  
  const Listar = () => {
    dispatch(listAsyn())
  }
  useEffect(() => {
      Listar()
  }, [])
  const handleCheck = ({target}) => {
    console.log(target.value);
    
    if(check === true){
      setCheck(false)
      setVal({
        ...val,
        [target.name]: target.value
      })
      dispatch(addSyn(val))
      dispatch(sumaSyn(val.items + 1))
    }else{
      setCheck(true)
      
    }
    console.log(val);
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
          <Bill/>
        </form>        
    </div>
  )
}

export default Menu