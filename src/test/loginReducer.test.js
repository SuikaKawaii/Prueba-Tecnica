import { loginReducer } from "../redux/reducers/loginReducer";
import { types } from "../redux/types/types";

describe('Pruebas en loginReducer', () => { 
    test('Debe realizar el login', () => { 
        const initialState = {};
        const action = {
            type: types.login,
            payload: {
                id: '123',
                displayname: 'Laura'
            }
        }
        const state = loginReducer(initialState, action);
        expect(state).not.toEqual({
            id: '563',
            name: 'Laura'
        })
     })
     test('Debe cerrar sesión', () => { 
         const initialState = {
             id: '123',
             displayname: 'Laura'
         }
         const action = {
             type: types.logout
         }
         const state = loginReducer(initialState, action);
         expect(state).toEqual({})
      })
      test('Debe devolver el estado por defecto', () => {
          const initialState = {
              id: '123',
              displayname: 'Laura'
          }
          const action = {
              type: types.log
          }
          const state = loginReducer(initialState, action);
          expect(state).toEqual(initialState)
      })
 })