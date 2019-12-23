import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';
import Join from './components/Join.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Chat from './components/Chat.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueMaterial);
const router = new VueRouter({
  routes:[
    { path:'/' ,redirect:'/login'},
    { path:'/register' , component:Register},
    { path:'/login' , component:Login},
    { path:'/chat',component:Chat},
    { path:'/chat/:data',name:'Chat',component:Chat}
  ]
})

new Vue({
  render: h => h(App),
  router,
  component:{
    Join,
    Register,
    Login,
    Chat
  }
}).$mount('#app')
