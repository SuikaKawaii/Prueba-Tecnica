import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { facebook, google } from "../../firebase/firebaseConfig";
import { types } from "../types/types"

//-------------Facebook--------------
export const loginFacebook = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, facebook)
        .then(({user}) => {
            dispatch(login(user.uid, user.displayName))
        }).catch(error => {
            console.log((error));
        })
    }
}
//--------------Google---------------
export const loginGoogle = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, google)
        .then(({user}) => {
            dispatch(login(user.uid, user.displayName))
            console.log(`Bienvenido ${user.displayName}`);
        }).catch(error => {
            console.log(error);
        })
    }
}
//-----------------Asincrono---------------
export const loginAsyn = (email, password) => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            dispatch(
                login(user.uid, user.displayName)
            )
            console.log(`Bienvenido ${user.displayName}`);
        }).catch(error => {
            console.log('El usuario no existe');
        })
    }
}
export const logoutAsyn = () => {
    return (dispatch) => {
        const auth = getAuth();
        signOut(auth)
        .then(user => {
            dispatch(logout())
        }).catch(error => {
            console.log(error);
        })
    }
}
//---------------- Sincrónico----------------
export const login = (id, displayname) => {
    return{
        id: types.login,
        payload: {
            id,
            displayname
        }
    }
}
export const logout = () => {
    return{
        id:types.logout
    }
}