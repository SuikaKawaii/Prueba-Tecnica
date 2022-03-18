import { types } from "../redux/types/types"

describe('Verificar types', () => {
    test('Comparando types de Login y registro', () => {
        expect(types).toEqual({
            login: 'login',
            logout: 'logout',
            register: 'register'
        })
    })
})