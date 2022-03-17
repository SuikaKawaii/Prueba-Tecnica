import styled from 'styled-components';

export const Div = styled.div`
    position: relative;
    @media (min-width: 900px){
        border: 1px solid #F4FCD9;
        width: 30%;
        margin-left: 35%;
    }
`
export const Item = styled.h6`
    margin-top: 2%;
    margin-left: 2%;
    font-size: 12px;
    color: #886F6F;
    @media (min-width: 900px){
        margin-left: 5%;
    }
`
export const Subtotal = styled.h6`
    margin-left: 2%;
    margin-top: 1%;
    font-size: 14px;
    color: #886F6F;
    @media (min-width: 900px){
        margin-left: 5%;
    }
`
export const Envio = styled.h6`
    margin-left: 2%;
    margin-top: 1%;
    font-size: 14px;
    color: #886F6F;
    @media (min-width: 900px){
        margin-left: 5%;
    }
`
export const Total = styled.h6`
    margin-left: 2%;
    margin-top: 1%;
    font-size: 17px;
    color: #362706;
    @media (min-width: 900px){
        margin-left: 4%;
    }
`
export const Span = styled.span`
    text-align: right;
    position: absolute;
    left: 82%;  
    color: #362706;      
`
export const Comprar = styled.button`
    border-radius: 5px;
    background-color: #146356;
    border-color: #146356;
    padding: 5px;
    margin-left: 20%;
    margin-top: 5%;
    margin-bottom: 5%;
    color: #F4FCD9;
    @media (min-width: 900px){
        margin-left: 28%;
    }
`
export const B = styled.b`
    color: #362706;
    margin-left: 2%;
`