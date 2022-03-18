import { typesBill } from "../types/types"


const initialState = {    
    value: []
}
export const billReducer = (state=initialState, action) => {
    switch (action.type) {
        case typesBill.add:            
            return {
                ...state,
                value: [action.payload]
            }
        case typesBill.list:
            return{
                ...state,
                value: [...action.payload]
            }
        case typesBill.delete:
            return{
                ...state,
                value: state.value.filter(i => i.price !== action.payload)
            }      
    
        default:
            return state;
    }
}