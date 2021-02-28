url = 'http://crud_vue.test/'

const app = new Vue({
    el: '#app',
    created: function(){
        this.getUsers()

       
    },
    mounted: function(){
        //setInterval(this.getUsers,5000)
    },
    data:{
        users: [],
     
    },
    methods: {
        getUsers: function(){
            axios.get(url).then(response => {
                this.users  = response.data      
            })
        },
        imprimir: function(){
           search = document.getElementById('search').value;
           url = 'http://crud_vue.test/user/'+search
           axios.get(url).then(response => {
            this.users  = response.data
            this.users.forEach(element => {
                console.log(element.name)
            });
        });
        }
    }
})
