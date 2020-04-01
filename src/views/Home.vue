<template>
  <div>
    <MessageBox :message="message" @messageUpdated="message = $event" @submit="submit"></MessageBox>
    <MessageList
      :messagelist="messageList"
      class="contentlist"
      @voteUpChanged="voteUp"
      @voteDownChanged="voteDown"
    ></MessageList>
  </div>
</template>

<script>
// @ is an alias to /src
import MessageBox from "@/components/MessageBox.vue";
import MessageList from "@/components/MessageList.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    MessageBox,
    MessageList
  },
  data() {
    return {
      user_id: "",
      messageList: [],
      message: ""
    };
  },
  mounted() {
    this.user_id = localStorage.user_id;
    axios
      .get(`${process.env.VUE_APP_MESSAGE_HOST_API}/message`, {
        headers: { Authorization: `Bearer ${localStorage.token}` }
      })
      .then(response => {
        this.messageList = response.data.data;
      })
      .catch(() => {});
  },
  methods: {
    submit() {
      axios
        .post(
          `${process.env.VUE_APP_MESSAGE_HOST_API}/message/`,
          {
            message: this.message
          },
          { headers: { Authorization: `Bearer ${localStorage.token}` } }
        )
        .then(response => {
          this.messageList.unshift({
            id: response.data.data.id,
            total_vote: 0,
            value: response.data.data.message
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    voteUp(index, message_id) {
      let recent_value = this.messageList[index].total_vote;
      axios
        .post(
          `${process.env.VUE_APP_MESSAGE_HOST_API}/vote/message/${message_id}/up`,
          {},
          { headers: { Authorization: `Bearer ${localStorage.token}` } }
        )
        .then(response => {
          this.messageList[index].total_vote = recent_value + 1;
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    },
    voteDown(index, message_id) {
      let recent_value = this.messageList[index].total_vote;
      axios
        .post(
          `${process.env.VUE_APP_MESSAGE_HOST_API}/vote/message/${message_id}/down`,
          {},
          { headers: { Authorization: `Bearer ${localStorage.token}` } }
        )
        .then(response => {
          this.messageList[index].total_vote = recent_value - 1;
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped>
.contentlist {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>