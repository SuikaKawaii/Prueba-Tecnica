import { login, logout } from "../redux/actions/loginAction";
import { types } from "../redux/types/types";

describe('Verificar acciones de Login', () => { 
    test('Validar login sincronico', () => {
        const id = '123';
        const displayname = 'Laura';
        const loginAction = login(id, displayname);
        expect(loginAction).not.toEqual({
            type: types.login,
            payload: {
                id,
                displayname
            }
        }) 
    })
    test('Cerrar sesión', () => { 
        const id = '123';
        const displayname = 'Laura';
        const logoutAction = logout()
        expect(logoutAction).not.toEqual({
            type: types.logout
        }) 
     })
 })