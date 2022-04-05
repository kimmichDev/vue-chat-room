<template>
  <Register v-if="showRegisterForm">
    <p class="small fw-bold">Already a member? <span class="text-success fake-link" @click="showRegisterForm = !showRegisterForm"> Login </span> Here</p>
  </Register>
  <Login v-else>
    <p class="small fw-bold">No account yet? <span class="text-success fake-link" @click="showRegisterForm = !showRegisterForm"> Register </span> Here</p>
  </Login>
</template>

<script>
import Register from "../components/Register";
import Login from "../components/Login";
import { ref } from "@vue/reactivity";
export default {
  components: {
    Register,
    Login,
  },
  setup() {
    let showRegisterForm = ref(false);
    return { showRegisterForm };
  },
};
</script>

<style lang="scss" scoped></style>
