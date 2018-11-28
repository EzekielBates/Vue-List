var list = new Vue({
    el:'#list',
    data:{
        taskToAdd:"",
        tasks:[],
        numItems:0
    },
    methods:{
        addToList:function(){
            if(this.taskToAdd != ""){
                this.tasks.push(this.taskToAdd);
                this.taskToAdd = "";
                this.numItems++
            }
        },
        removeFromList:function(task){
            if(this.numItems >= 0){
                this.tasks.splice(this.tasks.indexOf(task),1);
                this.numItems--;
            }
        }
    }
})