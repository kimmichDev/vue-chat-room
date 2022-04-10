<template>
  <div class="">
    <div class="container" v-if="user">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 mt-2">
          <div class="card blur shadow border-0">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <h5 class="mb-0">Welcome {{ user.displayName }}</h5>
                  <small class="small text-black-50">Logged in as {{ user.email }}</small>
                </div>
                <div>
                  <button class="btn btn-warning" @click="logout()">Logout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getUser from "../composables/getUser";
import useLogOut from "../composables/useLogout";
export default {
  setup() {
    let { user } = getUser();
    let { logout } = useLogOut();
    return { user, logout };
  },
};
</script>

<style lang="scss" scoped></style>
