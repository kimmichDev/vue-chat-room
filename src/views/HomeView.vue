<template>
  <Register v-if="showRegisterForm">
    <p class="small fw-bold">Already a member? <span class="text-success fake-link" @click="showRegisterForm = !showRegisterForm"> Login </span> Here</p>
  </Register>
  <Login v-else @toChatRoom="changeChatRoomRoute">
    <p class="small fw-bold">No account yet? <span class="text-success fake-link" @click="showRegisterForm = !showRegisterForm"> Register </span> Here</p>
  </Login>
</template>

<script>
import Register from "../components/Register";
import Login from "../components/Login";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
export default {
  components: {
    Register,
    Login,
  },
  setup() {
    let showRegisterForm = ref(false);
    let router = useRouter();
    let changeChatRoomRoute = () => {
      router.push({ name: "chat-room" });
    };
    return { showRegisterForm, changeChatRoomRoute };
  },
};
</script>

<style lang="scss" scoped></style>
