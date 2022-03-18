import { countReducer } from "../redux/reducers/countReducer";
import { typesCount } from "../redux/types/types";

describe('Validación del contador', () => { 
    test('Debe incrementar', () => { 
        const initialState = 3;
        const action = {
            type: typesCount.increment
        }
        const state = countReducer(initialState, action);
        expect(state).toBe(4)
     })
     test('Debe decrementar', () => { 
         const initialState = 6;
         const action = {
             type: typesCount.decrement
         }
         const state = countReducer(initialState, action);
         expect(state).toBe(5)
      })
      test('Debe resetear ', () => { 
          const initialState = 5;
          const action = {
              type: typesCount.reset
          }
          const state = countReducer(initialState, action);
          expect(state).toBe(0)
       })
 })