import { typesCount } from "../types/types"

export const incrementSyn = (num) => {
    return{
        type: typesCount.increment,  
        payload: num     
    }
}
export const decrementSyn = (num) => {
    return{
        type: typesCount.decrement,
        payload: num       
    }
}
export const resetSyn = () => {
    return{
        type: typesCount.reset       
    }
}