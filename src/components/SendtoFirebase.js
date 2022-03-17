import { addDoc, collection } from 'firebase/firestore'
import React from 'react'
import { db } from '../firebase/firebaseConfig'

const SendtoFirebase = () => {
    
    const api = 'https://recipe-rissoto.vercel.app/recipe';

    const obtenerApi = async(api) => {
        const resp = await fetch(api)
        const data = await resp.json()
        const ingredients = data.ingredients;
        console.log(ingredients);
        console.table(ingredients)
        // enviarDatos(ingredients)
    }
    //asignar lo que me traigo de la api y lo que envio a la collection de firebase
    const enviarDatos = (ingredients) => {

               
        ingredients.forEach(d => {
            const {product, items, quantity, price} = d;

            const pasarApi = {
                product: product,
                // brand: brand, 
                items: items,
                quantity: quantity,
                price: price
            }
            addDoc(collection(db, 'RissotoSetas'), pasarApi)
            .then(resp => {
                console.log('...agregador');
            }).catch(error => {
                console.log(error);
            })
        })
    }
    // obtenerApi(api)
  return (
    <div>SendtoFirebase</div>
  )
}

export default SendtoFirebase