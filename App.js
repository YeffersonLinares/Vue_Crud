url = 'http://laravel_crud_vue.test/'

const main = new Vue({
    el: '#main',
    created: function(){
        this.getUsers()
        this.imprimir()
    },
    mounted: function(){
        //setInterval(this.getUsers,5000)
    },
    data:{
        lists: []
    },
    methods: {
        getUsers: function(){
            axios.get(url).then(response => {
                this.lists  = response.data
              
            })
        },
        imprimir: function(){

            search =  document.getElementById('search').value;
            url = 'http://laravel_crud_vue.test/user/'+search
             
            
            axios.get(url).then(response => {
                this.lists  = response.data
                this.lists.forEach(element => {
                    console.log(element.name)
                });
            });
        }

       
    }
})
