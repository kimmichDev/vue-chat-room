import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ChatRoom from "../views/ChatRoom.vue";
import getUser from "../composables/getUser";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/chatRoom",
    name: "chat-room",
    component: ChatRoom,
    beforeEnter: (to, from, next) => {
      let { user } = getUser();
      if (user.value) {
        next();
      } else {
        next({ name: "home" });
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
