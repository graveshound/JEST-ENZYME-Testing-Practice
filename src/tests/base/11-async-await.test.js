import { getImagen } from "../../base/11-async-await"

describe('Prueba de 11-async-await', () => {
    
    test('Debe retornar una URL de imagen', async() => {
        
        const url = await getImagen();

        expect(typeof url).toBe('string')
    })
    

})
