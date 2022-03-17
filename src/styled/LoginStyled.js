import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const DivForm = styled.div`
    margin: 35% 15% 15% 15%;
    border: 1px solid #E6D5B8;
    padding: 20px;

    @media (min-width: 900px){
        margin: 10% 40% 10% 40%;
        
    }
`
export const H2 = styled.h2`
    margin-bottom: 10%;
    text-align: center; 
    @media (min-width: 900px){
        margin-bottom: 5%;             
        
    }
`
export const Input = styled.input`
    border-radius: 5px;
    margin-bottom: 2%;
    @media (min-width: 900px){
        margin-bottom: 2%;
        width: 80%;
    }
`
export const DivInput = styled.div`
    
    @media (min-width: 900px){
        margin-bottom: 2%;
        margin-left: 15%;
    }
`
export const Button = styled.button`
    border-radius: 10px;
    background-color: #74959A;
    width: 95%;
    margin-left: 4%;
    padding: 8px;
    @media (min-width: 900px){
        margin-bottom: 2%;
        margin-left: 15%;
        width: 70%;
    }
`
export const Facebook = styled.button`
    border-radius: 10px;
    margin-left: 4%;
    margin-top: 3%;
    padding: 5px;
    background-color: #1572A1;
    @media (min-width: 900px){
        margin-bottom: 2%;
        margin-left: 15%;
        width: 70%;
    }
`
export const Google = styled.button`
    border-radius: 10px;
    margin-left: 4%;
    margin-top: 3%;
    width: 95%;
    padding: 5px;
    background-color: #BB6464;
    @media (min-width: 900px){
        margin-bottom: 2%;
        margin-left: 15%;
        width: 70%;
    }
`
export const LinkR = styled(Link)`
    margin-left: 25%;
    
`