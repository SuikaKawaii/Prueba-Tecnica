import React from 'react';
import { Button, DivForm, DivInput, Facebook, Form, Google, H2, Input, LinkR } from '../styled/LoginStyled'
import '../style/style.css'
import {FaGoogle, FaFacebook} from 'react-icons/fa'
import { useForm } from '../hooks/useForm';
import { loginAsyn, loginFacebook, loginGoogle } from '../redux/actions/loginAction';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const [values, handleInputChange, reset] = useForm({
        email: '',
        password: ''
    })
    const {email, password} = values;
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatchEvent(loginAsyn(email, password))
    }
    const handleFacebook = () => {
        dispatch(loginFacebook())
    }
    const handleGoogle = () => {
        dispatch(loginGoogle())
    }
  return (
    <div>
        <DivForm>
            <H2>Inicio de Sesión</H2>
            <form onSubmit={handleSubmit}>
                <DivInput>
                    <label>Usuario</label><br/>
                    <Input type='text'
                        name='email'
                        onChange={handleInputChange}/>
                </DivInput>
                <DivInput>
                    <label>Contraseña</label><br/>
                    <Input type='password'
                        name='password'
                        onChange={handleInputChange}/>
                </DivInput>
                <div>
                    <Button type='submit'>Inicio Sesión</Button>
                </div>
                <div>
                    <Facebook type='button' onClick={handleFacebook}>
                        <FaFacebook/> Continuar con Facebook
                    </Facebook>
                    <Google type='button' onClick={handleGoogle}>
                        <FaGoogle/> Continuar con Google
                    </Google>
                </div>
            </form>
            <LinkR to='/register'>Crea una cuenta</LinkR>
        </DivForm>
    </div>
  )
}

export default Login