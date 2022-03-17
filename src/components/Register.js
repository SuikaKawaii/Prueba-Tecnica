import { Form, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useForm } from '../hooks/useForm';
import {useDispatch} from 'react-redux'
import { registroEmailPasswordNombre } from '../redux/actions/registerAction';
import { DivRegister, Login, Registrarse, Title } from '../styled/RegisterStyled';

export const Register = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        nombre: '',
        email: '',
        pass: '',
        
    });

    const { nombre, email, pass } = formValues;

    const handleRegistro = (e) => {
        e.preventDefault();
        console.log(email,pass,nombre)
        dispatch(registroEmailPasswordNombre(email,pass,nombre))
    }

    return (
        <div>
            <Title>Registro</Title>
            <DivRegister>
                
                <Form onSubmit={handleRegistro}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter name"
                            name="nombre"
                            value={nombre}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="email"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="pass1"
                            // value={pass}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Registrarse  type="submit">
                        Registrarse
                    </Registrarse>
                    <div>
                        <Login to="/">Login</Login>
                    </div>
                </Form>
            </DivRegister>
        </div>
    )
}