<template>
  <div>
    <RegistrationBox
      :username="username"
      @usernameChanged="username = $event"
      :password="password"
      @passwordChanged="password = $event"
      @submit="submit"
    ></RegistrationBox>
  </div>
</template>

<script>
import RegistrationBox from "@/components/RegistrationBox.vue";
import axios from "axios";

export default {
  name: "Register",
  components: {
    RegistrationBox
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    submit() {
      axios
        .post(`${process.env.VUE_APP_VUE_APP_MESSAGE_HOST_API}/user/`, {
          username: this.username,
          password: this.password
        })
        .then(() => {
          this.$notify.success({
            title: "Success",
            message: "Great! Registration already success",
            duration: 4000
          });
          this.$router.push("login");
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