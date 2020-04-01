<template>
  <div>
    <MessageWithCommentBox
      :message="message"
      :commentMsg="commentMsg"
      @submit="submitted"
      @updateCommentMsg="commentMsg = $event"
      @voteUpChanged="voteUpMessage"
      @voteDownChanged="voteDownMessage"
    ></MessageWithCommentBox>
    <CommentList
      :commentList="comments"
      @voteUpCommentUpdated="voteUpComment"
      @voteDownCommentUpdated="voteDownComment"
    ></CommentList>
  </div>
</template>

<script>
import MessageWithCommentBox from "@/components/MessageWithComment.vue";
import CommentList from "@/components/CommentList.vue";
import axios from "axios";

export default {
  name: "",
  components: {
    MessageWithCommentBox,
    CommentList
  },
  data() {
    return {
      message: {},
      commentMsg: "",
      comments: []
    };
  },
  mounted() {
    axios
      .get(
        `${process.env.VUE_APP_MESSAGE_HOST_API}/message/` +
          this.$route.params.id,
        { headers: { Authorization: `Bearer ${localStorage.token}` } }
      )
      .then(response => {
        this.message = response.data.data[0];
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get(
        `${process.env.VUE_APP_MESSAGE_HOST_API}/comment/message/` +
          this.$route.params.id,
        { headers: { Authorization: `Bearer ${localStorage.token}` } }
      )
      .then(response => {
        this.comments = response.data.data;
        console.log(this.comments);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    submitted() {
      axios
        .post(
          `${process.env.VUE_APP_MESSAGE_HOST_API}/comment/message/` +
            this.$route.params.id,
          {
            user_id: localStorage.user_id,
            comment: this.commentMsg
          },
          { headers: { Authorization: `Bearer ${localStorage.token}` } }
        )
        .then(response => {
          this.comments.unshift({
            id: response.data.data.id,
            total_vote: 0,
            value: response.data.data.comment
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    voteUpMessage(id) {
      let recent_value = this.message.total_vote;
      axios
        .post(
          `${process.env.VUE_APP_MESSAGE_HOST_API}/vote/message/${id}/up`,
          {},
          { headers: { Authorization: `Bearer ${localStorage.token}` } }
        )
        .then(() => {
          this.message.total_vote = recent_value + 1;
        })
        .catch(err => {
          console.log(err);
        });
    },
    voteDownMessage(id) {
      let recent_value = this.message.total_vote;
      axios
        .post(
          `${process.env.VUE_APP_MESSAGE_HOST_API}/vote/message/${id}/down`,
          {},
          { headers: { Authorization: `Bearer ${localStorage.token}` } }
        )
        .then(response => {
          this.message.total_vote = recent_value - 1;
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    },
    voteUpComment(index, id) {
      axios
        .post(
          `${process.env.VUE_APP_MESSAGE_HOST_API}/vote/comment/${id}/up`,
          {},
          { headers: { Authorization: `Bearer ${localStorage.token}` } }
        )
        .then(() => {
          let recent_value = this.comments[index].total_vote;
          this.comments[index].total_vote = recent_value + 1;
        })
        .catch(err => {
          console.log(err);
        });
    },
    voteDownComment(index, id) {
      axios
        .post(
          `${process.env.VUE_APP_MESSAGE_HOST_API}/vote/comment/${id}/down`,
          {},
          { headers: { Authorization: `Bearer ${localStorage.token}` } }
        )
        .then(() => {
          let recent_value = this.comments[index].total_vote;
          this.comments[index].total_vote = recent_value - 1;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>