url = 'http://crud_vue.test/'

const main = new Vue({
    el: '#main',
    created: function(){
        this.getUsers()
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
                this.lists.forEach(element => {
                    console.log(element.name)
                });
            })
        },
    }
})
