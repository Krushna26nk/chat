<template>
    <div class="join_wrapper">
        <div class="inner_wrapper">
            <form action="">
                <md-card>
                    <md-card-header style="text-align:center;font-size:25px;text-transform:uppercase;letter-spacing:1px" >
                        <h5>Join</h5>
                    </md-card-header>
                    <md-card-content>
                        <div class="md-layout-item md-small-size-100" >
                            <md-field>
                                <label for="name">Name</label>
                                <md-input type="text" name="Name" v-model="name"/>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100" >
                            <md-field>
                                <label for="room">Room</label>
                                <md-input type="text" name="Room" v-model="room"/>
                            </md-field>
                        </div>
                    </md-card-content>
                    <md-card-actions>
                        <div class="button_wrapper">
                           <router-link :to="{name:'Chat',params:{data:{
                               name:name,room:room
                               }
                           }}">
                             <md-button type="submit" class="">Join</md-button>
                           </router-link>
                        </div>
                    </md-card-actions>
                </md-card>
                
            </form>
        </div>
    </div>    
</template>

<script>
import {required,minLength} from 'vuelidate/lib/validators';
import Chat from './Chat.vue';

export default {
    name:'Join',
    component:{
        Chat
    },
    data:() =>({
            name:'',
            room:''
    }),
    validations:{
        name:{
            required,
            minLength: minLength(3)
        },
        room:{
            required,
            minLength: minLength(3)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
