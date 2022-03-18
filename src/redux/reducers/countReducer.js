import { typesBill, typesCount } from "../types/types"


const initialState = 0
export const countReducer = (state=initialState, action) => {
    switch (action.type) {
        
        case typesCount.increment:
            return state + 1; 
        
        case typesCount.decrement:
            return state - 1;
        case typesCount.reset:
            return initialState;
    
        default:
            return state;
    }
}