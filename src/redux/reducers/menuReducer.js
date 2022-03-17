import { typesRisotto } from "../types/types";

const initialState = {
    ingredients: [],
    price: 0
}
export const menuReducer = (state=initialState, action) => {
    switch (action.type) {
        case typesRisotto.add:            
            return {
                ...state,
                precio: [action.payload]
            }
        case typesRisotto.edit:
            return{
                ...state
            }
        case typesRisotto.list:
            return{
                ...state,
                ingredients: [...action.payload]
            }
        case typesRisotto.delete:
            return{
                ...state,
                ingredients: state.ingredients.filter(i => i.codigo !== action.payload)
            }
        case typesRisotto.suma:
            return{
                ...state,
                price: action.payload 
            }
    
        default:
            return state;
    }
}