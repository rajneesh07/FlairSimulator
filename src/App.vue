<template>
  <div id="app">
    <div class="input-container">
      <label>Call ID</label>
      <input type="text" class="mx-2" v-model="call.callId" />
    </div>

    <div class="input-container">
      <label>UCID</label>
      <input type="text" class="mx-2" v-model="call.ucid" />
    </div>

    <div class="input-container">
      <label>CLI</label>
      <input type="text" class="mx-2" v-model="call.callingAddress" />
    </div>

    <div class="input-container">
      <label>DNIS</label>
      <input type="text" class="mx-2" v-model="call.calledAddress" />
    </div>

    <div class="input-container">
      <label>Call Type</label>
      <input type="text" class="mx-2" v-model="call.callType" />
    </div>

    <div class="input-container">
      <label>Call Direction</label>
      <select class="mx-2">
        <option value="1">Inbound</option>
        <option value="3">Outbound</option>
        <option value="2">Consulted</option>
      </select>
    </div>

    <div class="input-container">
      <label>Call State</label>
      <input type="text" class="mx-2" v-model="call.callState" />
    </div>

    <div class="input-container">
      <label>UUI</label>
      <input type="text" id class="mx-2" v-model="call.uui" />
    </div>
    <br />
    <button @click="sendMessage" class="button mx-2">Send</button>
    <button @click="makeCall" class="button mx-2">Make Call</button>
    <button @click="dropCall" class="button mx-2">Drop</button>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      call: {
        callId: 281,
        ucid: "00001002811579679692",
        callingAddress: "918879708222",
        calledAddress: "3009",
        callType: "1",
        callDirection: "1",
        callState: "98",
        status: "98",
        type: "1",
        multiCallState: "1",
        callStartTime: "1234",
        uui: ""
      }
    };
  },
  methods: {
    makeCall() {
      console.log("make call clicked");
      this.call.callId = Math.round(Math.random() * 1000);
      this.call.ucid = "00001002811579679" + Math.round(Math.random() * 1000);
      this.$socket.emit("sim_makeCall", this.call);
    },
    dropCall() {
      console.log("drop call clicked");
      this.$socket.emit("sim_dropCall", this.call);
    },
    sendMessage() {}
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.2em;
}
.mx-2 {
  margin-left: 20px;
  margin-right: 20px;
}
.button {
  padding: 10px;
  background-color: slateblue;
  color: white;
  font-size: 1em;
}
</style>
