<template>
  <div>
    <MessageBox></MessageBox>
    <br />
    <MessageList></MessageList>
    <MessageList></MessageList>
    <MessageList></MessageList>
  </div>
</template>

<script>
// @ is an alias to /src
import MessageBox from "@/components/MessageBox.vue";
import MessageList from "@/components/MessageList.vue";

export default {
  name: "Home",
  components: {
    MessageBox,
    MessageList
  }
};
</script>
