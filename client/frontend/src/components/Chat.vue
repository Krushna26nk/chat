<template>
    <div class="outer_container">
        <div class="inner_container">
            <input value="" @change="setMessage" @keyup.enter="sendMessage" type="text">
        </div>
    </div>  
</template>


<script>
import io from 'socket.io-client';

export default {
    name:'Chat',
    data(){
        return{
        name:'',
        room:'',
        socket:'',
        message:'',
        messages:[],
        ENDPOINT:'localhost:5000'
    }}, 
     methods:{
     setMessage(event){
         console.log(event.target.value);
         this.message = event.target.value;
         console.log(this.message);
     },
     sendMessage(event){
         console.log(event);
         event.preventDefault();
         
        if(this.message){
            this.socket.emit('sendMessage',this.message,()=>{
                this.message = ''
            })
        }socket
        console.log(this.message,this.messages);
     }
 },
    created(){
        this.name = this.$route.params.data.name;
        this.room = this.$route.params.data.room;

        let socket = io(this.ENDPOINT);
        this.socket = socket;
        socket.emit('join',{name:this.name,room:this.room},()=>{
            
        });
        socket.on('message',(message)=>{
             this.messages = [...this.messages,message]
        },[this.messages]);
        // console.log(socket);

        return ()=>{
            socket.emit('disconnect');
            socket.off();
        }
    },
    beforeDestroy () {
    io.$off();
 },

}
</script>


<style lang="scss" scoped>

</style>
