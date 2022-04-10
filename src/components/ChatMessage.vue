<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8">
        <div class="chat-wrapper blur p-2 rounded mt-2">
          <div class="p-2 m-1 rounded-3" v-for="message in messages" :key="message.id">
            <div class="ms-3">
              <div class="d-flex align-items-center">
                <p class="mb-0 fw-bolder me-2 chat-username">{{ message.name }}</p>
                <small class="small text-black-50">12 min ago</small>
              </div>
              <p class="mb-0">{{ message.message }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { db } from "../firebase/config";
import { query, orderBy, collection, onSnapshot } from "firebase/firestore";
export default {
  setup() {
    let messages = ref([]);
    onSnapshot(query(collection(db, "messages"), orderBy("created_at")), (snapDocs) => {
      let results = [];
      snapDocs.forEach((doc) => {
        let message = { ...doc.data(), id: doc.id };
        results.push(message);
      });
      messages.value = results;
    });
    // console.log(messages.value);
    return { messages };
  },
};
</script>

<style scoped>
small {
  font-size: 0.7rem;
}
.chat-username {
  font-size: 0.8rem;
}
</style>
