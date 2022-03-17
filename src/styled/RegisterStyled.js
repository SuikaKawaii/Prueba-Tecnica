import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DivRegister = styled.div`
    border: 1px solid #F4FCD9;
    margin: 10% 10% 3% 10%;
    padding: 10px;
    @media (min-width: 900px){
        margin: 3% 40% 3% 40%;
    }
`
export const Title = styled.h2`
    margin: 30% 0 0 10%;
    font-weight: bold;
    @media (min-width: 900px){
        margin: 5% 40% 3% 40%;
    }
`
export const Registrarse = styled(Button)`
    margin-left: 30%;
    margin-bottom: 5%;
    background-color: #74959A;
    border-color: #74959A;
`
export const Login = styled(Link)`
    margin-left: 44%;
    
`