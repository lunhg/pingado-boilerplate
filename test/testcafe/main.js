fixture("Inicialização do servidor").page("http://localhost:3000")

test("Loading page", function(t){
    t.expect(Selector('#app')).ok()
})
