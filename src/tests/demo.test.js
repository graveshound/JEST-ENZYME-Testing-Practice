describe('Pruebas en el Archivo demo.test.js', () => {
    
    test('Deben ser iguales los Strings', () => {
    
        //1. Inicializacion
        const mensaje = "Hola Mundo";
      
        //2. Estimulo
        const mensaje2=`Hola Mundo`
        
      
        //Observar el Comportamiento
        expect(mensaje).toBe(mensaje2);
      
      })
       
})



