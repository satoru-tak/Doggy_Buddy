<template>
  <div>
    <label for="name">name</label>
    <input id="name" type="name" v-model="name" />
  </div>
  <div>
    <label for="email">email</label>
    <input id="email" type="email" v-model="email" />
  </div>
  <div>
    <label for="password">password</label>
    <input id="password" type="password" v-model="password" />
  </div>
  <div>  
    <label for="passwordConfirmation">password_confirmation</label>
    <input id="passwordConfirmation" type="password" v-model="password_confirmation" />
  </div>
  <div>
    <button @click="handleSingUp()">Sign Up</button>
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import AuthService from '../services/AuthService';

export default defineComponent({
  name: 'SignUp',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      uid: '',
      access_token: '',
      client: '',
    };
  },
  methods: {
    handleSingUp() {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confrimation: this.password_confirmation,
      };

      AuthService.signUp(data).then((response) => {
        localStorage.setItem("access-token", response.headers["access-token"]);
        localStorage.setItem("client", response.headers["client"]);
        localStorage.setItem("uid", response.headers["uid"]);
        this.access_token = response.headers["access-token"];
        this.client = response.headers["client"];
        this.uid = response.headers["uid"];
      }).catch((e: Error) => {
        console.log(e)
      });
    },
  }
})
</script>