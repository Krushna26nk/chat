<template>
    <div>
        <h4>Chat</h4>
         <h5>{{name}}</h5>
        <h5>{{room}}</h5>
    </div>
</template>


<script>
import io from 'socket.io-client';

export default {
    name:'Chat',
    data:()=>({
        name:'',
        room:'',
        socket:'',
        ENDPOINT:'localhost:5000'
    }),
    created(){
        this.name = this.$route.params.data.name;
        this.room = this.$route.params.data.room;

        let socket = io(this.ENDPOINT);
        this.socket = socket;
        socket.emit('join',{name:this.name,room:this.room},()=>{
            
        });
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
