<template>
  <div>
    <label for="email">Email</label>
    <input v-model="email" id="Email" type="text" placeholder="Email">
  </div>
  <div>
    <label for="password">Password</label>
    <input v-model="password" id="Password" type="password" placeholder="Password">
  </div>
  <div>
    <button @click="handleLogin()">Sign In</button>
  </div>
  <div>
    <button @click="handleLogout()">Sign Out</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AuthService from '../services/AuthService'
import { AxiosError } from 'axios'

export default defineComponent({
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      uid: '',
      access_token: '',
      client: '',
    };
  },
  methods: {
    handleLogin() {
      let data = {
        email: this.email,
        password: this.password,
      };

      AuthService.login(data).then((response) => {
        localStorage.setItem("access-token", response.headers["access-token"]);
        localStorage.setItem("client", response.headers["client"]);
        localStorage.setItem("uid", response.headers["uid"]);
        this.access_token = response.headers["access-token"];
        this.client = response.headers["client"];
        this.uid = response.headers["uid"];
      }).catch((e: AxiosError) => {
        console.log(e.response?.data)
      });
    },
    handleLogout() {
      AuthService.logout({
        headers: {
          "access-token": localStorage.getItem("access-token"),
          client: localStorage.getItem("client"),
          uid: localStorage.getItem("uid"),
        }
      }).then((response) => {
        console.log(response)
        this.access_token = "";
        this.client = "";
        this.uid = "";
        localStorage.removeItem("access-token");
        localStorage.removeItem("client");
        localStorage.removeItem("uid");
      })
    }
  }
})
</script>