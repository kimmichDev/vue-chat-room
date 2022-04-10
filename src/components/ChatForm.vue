<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 mt-2">
          <div>
            <form @submit.prevent="">
              <textarea class="form-control blur" placeholder="Type here to send message" @keydown.enter="sendHandler" v-model="message"></textarea>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import getUser from "../composables/getUser";
import useCollection from "../composables/useCollection";
import { serverTimestamp } from "firebase/firestore";
export default {
  setup() {
    let message = ref("");
    let { user } = getUser();

    let sendHandler = async () => {
      let messageData = {
        name: user.value.displayName,
        message: message.value,
        created_at: serverTimestamp(),
      };
      message.value = "";
      let { addDocument, error } = useCollection("messages");
      await addDocument(messageData);
    };
    return { message, sendHandler };
  },
};
</script>

<style lang="scss" scoped></style>
