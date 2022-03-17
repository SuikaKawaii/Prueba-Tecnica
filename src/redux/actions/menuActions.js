import { async } from "@firebase/util";
import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { typesRisotto } from "../types/types";

//------------Asincrono---------
export const addAsyn = (precio) => {
    return (dispatch) => {
        addDoc(collection(db, 'contador'), precio)
        .then(resp => {
            dispatch(addAsyn(precio))
            dispatch(listAsyn())
        }).catch(error => {
            console.log(error);
        })
    }
}
export const listAsyn = () => {
    return async(dispatch) => {
        const traerIngredient = await getDocs(collection(db, 'RissotoSetas'));
        const ingredients = [];
        traerIngredient.forEach((doc) => {
            ingredients.push({
                ...doc.data()
            });            
        })
        dispatch(listSyn(ingredients))
    }
}
export const deleteAsyn = (codigo) => {
    return async(dispatch) => {
        const traerIngredient = collection(db, 'contador');
        const q = query(traerIngredient, where('codigo', '==', codigo))
        const datos = await getDocs(q);
        datos.forEach((docu) => {
            deleteDoc(doc(db, 'RissotoSetas', docu.id));
        })
        dispatch(deleteSyn(codigo))
    }
}
//------------Sincrono------------
export const addSyn = (precio) => {
    return{
        type: typesRisotto.add,
        payload: precio
    }
}
export const editSyn = (ingredient) => {
    return{
        type: typesRisotto.edit,
        payload: ingredient
    }
}
export const listSyn = (ingredient) => {
    return{
        type: typesRisotto.list,
        payload: ingredient
    }
}
export const deleteSyn = (codigo) => {
    return{
        type: typesRisotto.delete,
        payload: codigo
    }
}
export const sumaSyn = (price) => {
    return{
        type: typesRisotto.suma,
        payload: price
    }
}