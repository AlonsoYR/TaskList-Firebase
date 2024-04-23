describe('Testeamos nuestra app', () => {
    it('Se renderiza correctamente',() => {
        cy
        .visit('/')
        .contains('Task List v3 - hosted on Firebase')
    })
})