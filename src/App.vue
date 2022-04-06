<template>
  <router-view></router-view>
</template>

<script>
import ChatRoom from "./views/ChatRoom";
import HomeView from "./views/HomeView";
export default {
  components: {
    ChatRoom,
    HomeView,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
