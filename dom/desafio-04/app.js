new Vue({
	el: '#desafio',
	data: {
		classeCSS: 'destaque',
		pink: true,
		classe3: '',
		classe4 = ' '
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classeCSS = this.classeCSS == 'destaque' 
				? 'encolher' : 'destaque'
			}, 1000);
		},
		iniciarProgresso() {
			setInterval(() => {
				
			}, 5000);
		},
		setPink(event) {
			if(event.target.value == "true") {
				this.pink = true
			} else if(event.target.value == "false") {
				this.pink = false
			}
		}
	}
})
