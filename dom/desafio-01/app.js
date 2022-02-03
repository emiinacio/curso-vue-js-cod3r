new Vue({
    el: '#desafio',
    data: {
        nome: 'Emily Inácio',
        idade: '21',
        imagem: 'https://picsum.photos/200'
    },
    methods: {
        idadeVezes3(){
            return this.idade * 3
        },
        Random: function(min, max) {
            max = 1; 
            min = 20; 
            return Math.random() * (max - min) + min;
        },
        inputValue(event) {
            this.nome = event.target.value
        }
    }
})
