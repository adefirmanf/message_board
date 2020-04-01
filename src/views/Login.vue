<template>
  <div>
    <LoginBox
      :username="username"
      @usernameChanged="username = $event"
      :password="password"
      @passwordChanged="password = $event"
      @submit="submit"
    ></LoginBox>
  </div>
</template>

<script>
import LoginBox from "@/components/LoginBox.vue";
import axios from "axios";

export default {
  name: "Login",
  components: {
    LoginBox
  },
  data() {
    return {
      user_id: "",
      username: "",
      password: ""
    };
  },
  mounted() {
    if (localStorage.user_id) {
      this.user_id = localStorage.user_id;
    }
  },
  methods: {
    submit() {
      axios
        .post(`${process.env.VUE_APP_MESSAGE_HOST_API}/auth/login`, {
          username: this.username,
          password: this.password
        })
        .then(response => {
          localStorage.user_id = response.data.data.user_id;
          localStorage.token = response.data.data.token;
          this.$router.push("/");
        })
        .catch(err => {
          this.$notify.error({
            title: "Error",
            message: err,
            duration: 4000
          });
        });
    }
  }
};
</script>

<style>
</style>