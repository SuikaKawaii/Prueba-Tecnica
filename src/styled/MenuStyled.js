import styled from 'styled-components';

export const DivSelect = styled.div`
   display: block;
   
`
export const DivCard = styled.div`
    border: 1px solid #F4FCD9;
    padding: 10px;
    display: flexbox;
    width: 100%;
    position: relative;
    @media (min-width: 900px){
        width: 30%;
        margin-left: 35%;
    }
`
export const NameIngredient = styled.h6`
    font-size: 17px;
    color: #362706;
    position: absolute;
    left: 30%;
    top: 20%;    
`
export const Brand = styled.h6`
    font-size: 13px;
    color: #886F6F;
    position: absolute;
    top: 48%;
    left: 30%;
`
export const Quantity = styled.h6`
    font-size: 14px;
    color: #362706;
    position: absolute;
    top: 68%;
    left: 30%;
`
export const Price = styled.h6`
    font-size: 20px;    
    color: #146356;
    position: absolute;
    top: 35%;
    left: 85%;
    
`
export const Check = styled.input`
    margin-top: 10%;
    margin-left: 2%;
    @media (min-width: 900px){
        margin-top: 5%;
    }
`
export const Title = styled.h6`
    color: #362706;
    margin: 5% 0 1% 5%;
    font-size: 15px;
    @media (min-width: 900px){
        margin-left: 35%;
    }
`
export const Rissoto = styled.h2`
    color: #362706;
    margin: 0 0 0 5%;
    font-weight: bold;
    @media (min-width: 900px){
        margin-left: 35%;
    }
`
export const A = styled.a`
    text-decoration: none;
    margin-top: 1%;
    color: #D6E5FA;
    font-size: 12px;    
`
export const DivA = styled.div`
    margin-left: 5%;
    @media (min-width: 900px){
        margin-left: 35%;
    }
`
export const Items = styled.input`
    width: 15%;
    height: 45px;
    margin-left: 2%;
    text-align: center;    
    @media (min-width: 900px){
        width: 10%;
        height: 45px;
        margin-left: 3%;
    }
`
export const Logout = styled.button`
    border: none;
    margin-left: 85%;
    margin-top: 5%;
    
`
