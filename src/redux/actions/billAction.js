import { async } from "@firebase/util";
import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { typesBill, typesRisotto } from "../types/types";

//------------Asincrono---------
export const addAsyn = (val) => {
    return (dispatch) => {
        addDoc(collection(db,'bill'), val)
        .then(resp => {
            dispatch(addAsyn(val))
            dispatch(listAsyn())
        }).catch(error => {
            console.log(error);
        })
    }
}
export const listAsyn = () => {
    return async(dispatch) => {
        const getBill = await getDocs(collection(db, 'bill'));
        const values = [];
            getBill.forEach((doc) => {
            values.push({
                ...doc.data()
            });            
        })
        dispatch(listSyn(values))
    }
}
export const deleteAsyn = (val) => {
    return async(dispatch) => {
        const getBill = collection(db, 'bill');
        const q = query(getBill, where('price', '==', val))
        const datos = await getDocs(q);
        datos.forEach((docu) => {
            deleteDoc(doc(db, 'bill', docu.id));
        })
        dispatch(deleteSyn(val))
    }
}
//------------Sincrono------------
export const addSyn = (val) => {
    return{
        type: typesBill.add,
        payload: val
    }
}
export const listSyn = (val) => {
    return{
        type: typesBill.list,
        payload: val
    }
}
export const deleteSyn = (val) => {
    return{
        type: typesBill.delete,
        payload: val
    }
}
