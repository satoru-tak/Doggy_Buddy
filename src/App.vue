<template>
  <div id="app">
    <h3>掲示板に投稿する</h3>
    <div v-if="client === ''">
      <div>
        <h1>SignUp</h1>
        <label for="name">name</label>
        <input id="name" type="name" v-model="name" />
        <label for="email">email</label>
        <input id="email" type="email" v-model="email" />
        <label for="password">password</label>
        <input id="password" type="password" v-model="password" />
        <label for="passwordConfirmation">password_confirmation</label>
        <input id="passwordConfirmation" type="password" v-model="password_confirmation" />
        <button @click="signUp">新規登録</button>
      </div>
      <div>
        <h1>SignIn</h1>
        <label for="email">email</label>
        <input id="email" type="email" v-model="email" />
        <label for="password">password</label>
        <input id="password" type="password" v-model="password" />
        <button @click="signIn">SignIn</button>
      </div>
      <div>
        <h1>SignOut</h1>
        <button @click="signOut">SignOut</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      uid: "",
      access_token: "",
      client: "",
    };
  },
  methods: {
    signUp() {
      axios.post("http://localhost:3000/api/v1/auth", {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confrimation: this.password_confirmation,
      }).then((response) => {
        localStorage.setItem("access-token", response.headers["access-token"]);
        localStorage.setItem("client", response.headers["client"]);
        localStorage.setItem("uid", response.headers["uid"]);
        this.access_token = response.headers["access-token"];
        this.client = response.headers["client"];
        this.uid = response.headers["uid"];
      });
    },
    signIn() {
      console.log(this.name);
      console.log(this.email);
      console.log(this.password);
      axios.post("http://localhost:3000/api/v1/auth/sign_in", {
        email: this.email,
        password: this.password,
      }).then((response) => {
        console.log(response);
        localStorage.setItem("access-token", response.headers["access-token"]);
        localStorage.setItem("client", response.headers["client"]);
        localStorage.setItem("uid", response.headers["access-token"]);
        this.access_token = response.headers["access-token"];
        this.client = response.headers["client"];
        this.uid = response.headers["uid"];
      });
    },
    signOut() {
      console.log(this.access_token);
      console.log(this.client);
      console.log(this.uid);
      axios.delete("http://localhost:3000/api/v1/auth/sign_out", {
        // test: { test: "test" },
        headers: {
          "access-token": this.access_token,
          client: this.client,
          uid: this.uid,
        },
      }).then((response) => {
        console.log(response);
        this.access_token = "";
        this.client = "";
        this.uid = "";
        localStorage.removeItem("access-token");
        localStorage.removeItem("client");
        localStorage.removeItem("uid");
      });
    },
  }
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>