import Vue from 'vue'
import App from './App.vue'
import VueSocketIO from "vue-socket.io"
Vue.config.productionTip = false

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: "https://bl-socket-server.herokuapp.com",
    vuex: {

      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_"
    }
  })
)

new Vue({
  render: h => h(App),
  sockets: {
    connect: function () {
      console.log('socket connected')
    },
    SOCKET_ICALLRING: function (data) {
      console.log('this method was fired by the socket server. data=' + JSON.stringify(data))
    }
  },
}).$mount('#app')
