new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Este botão foi clicado')
        },
        armazenarValor(event) {
            this.valor = event.target.value
        }
    }
})