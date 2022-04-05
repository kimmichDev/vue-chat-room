<template>
  <div class="container min-vh-100 d-flex justify-content-center align-items-center bg-light">
    <!-- login form start -->
    <div class="row w-100 justify-content-center align-items-center flex-column-reverse flex-md-row animate__animated animate__fadeIn">
      <div class="col-12 col-md-4">
        <div>
          <h2 class="fw-bold">Welcome Back !</h2>
          <p class="small text-black-50">Hope someone is missing you there.</p>
        </div>
        <div>
          <div class="card shadow">
            <div class="card-body">
              <form @submit.prevent="login">
                <div class="mb-3">
                  <label for="" class="form-label">Email</label>
                  <input required type="email" class="form-control" v-model="email" />
                </div>
                <div class="mb-3">
                  <label for="" class="form-label">Password</label>
                  <input required type="password" class="form-control" v-model="password" />
                </div>
                <p class="alert alert-danger py-1" v-if="error">
                  <small>{{ error }}</small>
                </p>
                <div class="mb-3">
                  <button class="btn btn-success w-100"><span class="spinner-grow spinner-grow-sm me-2" role="status" v-if="isLoging"></span>Login</button>
                </div>
              </form>
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="w-100 mb-3 mb-md-0">
          <img src="../assets/texting-animate.svg" class="img-fluid" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import useLogin from "../composables/useLogin";
export default {
  setup() {
    let email = ref("");
    let password = ref("");
    let { error, signIn, isLoging } = useLogin();
    let login = async () => {
      let res = await signIn(email.value, password.value);
      if (res) {
        console.log(res.user);
      }
    };
    return { email, password, login, error, isLoging };
  },
};
</script>

<style lang="scss" scoped></style>
