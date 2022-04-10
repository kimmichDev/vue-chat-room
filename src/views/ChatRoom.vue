<template>
  <div class="animate__animated animate__fadeIn min-vh-100 chat-bg">
    <div class="bg-blur">
      <Nav></Nav>
      <ChatMessage></ChatMessage>
      <ChatForm></ChatForm>
    </div>
  </div>
</template>

<script>
import ChatMessage from "../components/ChatMessage";
import ChatForm from "../components/ChatForm";
import { watch } from "@vue/runtime-core";
import Nav from "../components/Nav";
import getUser from "@/composables/getUser";
import { useRouter } from "vue-router";

export default {
  components: {
    ChatMessage,
    ChatForm,
    Nav,
  },
  setup() {
    let router = useRouter();
    let { user } = getUser();
    watch(user, () => {
      router.push({ name: "home" });
    });
  },
};
</script>

<style lang="scss" scoped></style>
