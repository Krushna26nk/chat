<template>
    <div>
        <form action="" class="loginForm">
            <md-card class="md-layout-item md-size-50 md-small-size-100">
                <md-card-header>
                    <div class="header">
                        <div class="md-headline">
                            <span>F</span>
                            <span>U</span>
                            <span>N</span>
                            <span>D</span>
                            <span>O</span>
                            <span>O</span>
                        </div>
                        <div class="subheading">Sign in to your Gmail </div>
                    </div>
                </md-card-header>

                <md-card-content>
                    <div class="card_content md-layout">

                        <div class="md-layout-item">
                            <md-field class="field">
                                <label for="firstName"></label>
                                <md-input v-model="firstName" placeholder="First Name" />
                            </md-field>
                        </div>

                        <div class="md-layout-item">
                            <md-field class="field">
                                <label for="lastName"></label>
                                <md-input v-model="lastName" placeholder="Last Name"/>
                            </md-field>
                        </div>

                        <div class="md-layout-item">
                                <md-radio v-model="service" value="Basic"> Basic </md-radio>
                                <md-radio v-model="service" value="Advance"> Advance </md-radio>
                        </div>

                        <div class="md-layout-item">
                            <md-field class="field">
                                <label for="email"></label>
                                <md-input v-model="email" placeholder="Email"/>
                            </md-field>
                        </div>

                        <div class="md-layout-item">
                            <md-field class="field">
                                <label for="password"></label>
                                <md-input v-model="password" placeholder="Password"/>
                            </md-field>
                        </div>

                        <div class="md-layout-item">
                            <md-field class="field">
                                <label for="confirmPassword"></label>
                                <md-input v-model="confirm_password" placeholder="Confirm Password"/>
                            </md-field>
                        </div>

                    </div>
                </md-card-content>
                <md-card-actions>
                    <md-button class="md-dense md-raised md-primary">SignUp</md-button>
                </md-card-actions>

            </md-card>
        </form>
    </div>    
</template>

<script>
export default {
    name:'Login',
    data : () => ({
        firstName:'',
        lastName :'',
        service  :'',
        email    :'',
        password :'',
        confirm_password:''
    })
}
</script>

<style lang="scss" scoped>
    .header{
        display: flex;
        flex-direction: column;
    }
    .md-layout-item{
        width: 75%;
    }
    .card_content{
        display: flex;
        width: 100%;
        flex-flow: column wrap;
        align-content: center;
        justify-content: center
    }
    .field{
        margin:0px 0px 10px;
    }

    .md-headline :nth-child(even){
        color: red;
    }
    .md-headline :nth-child(1){
        color: rgba(0, 0, 255, 0.876);
    }
    .md-headline :nth-child(4){
        color: rgba(0, 0, 255, 0.876);
    }
    .md-headline :nth-child(3){
        color: yellow;
    }
    .md-headline :nth-child(5){
        color: green;
    }

</style>
