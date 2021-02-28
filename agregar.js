url = "http://crud_vue.test/userP/"
const app = new Vue({
    el: '#app',

    data:{
        users: [],
        name: '',
        email: '',
        password: ''
    },
    methods: {
        addUser: function(){
            this.users.push({
                id: 0,
                name: this.name,
                email: this.email,
                password: this.password,
                token: ''
            })
            this.users.token = localStorage.getItem("token")
            axios.post("",this.users)
        }
        },
})
