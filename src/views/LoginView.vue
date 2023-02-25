<script>
import { defineComponent, ref } from "vue";
import FormTag from "../components/forms/FormTag.vue";
import TextInput from "../components/forms/TextInput.vue";
import Security from "../router/security";
// import { RouterLink } from "vue-router";
// import { useAuthStore } from "../stores/auth";

export default defineComponent({
  name: "LoginComposition",
  props: {},
  emits: ["error", "success", "warning", "info"],
  components: {
    "form-tag": FormTag,
    "text-input": TextInput,
  },

  setup(props, ctx) {
    let email = ref("");
    let password = ref("");

    function submitLogin() {
      const payload = {
        email: email.value,
        password: password.value,
      };

      fetch(
        import.meta.env.VITE_RBAC_API_URL + "/login",
        Security.requestOptions(payload)
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
        });

      // const auth = useAuthStore();
      // console.log("Submit Login", auth.user);
      ctx.emit("success", "Login", "berhasil");
    }

    return {
      email,
      password,
      submitLogin,
    };
  },
});
</script>

<template>
  <section class="section">
    <div class="container mt-5">
      <div class="row">
        <div
          class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4"
        >
          <div class="login-brand">
            <img
              src="./../assets/img/stisla-fill.svg"
              alt="logo"
              width="100"
              class="shadow-light rounded-circle"
            />
          </div>

          <div class="card card-primary">
            <div class="card-header">
              <h4>Login</h4>
            </div>

            <div class="card-body">
              <form-tag
                name="login_form"
                @loginevt="submitLogin"
                event="loginevt"
              >
                <text-input
                  v-model="email"
                  label="Email"
                  type="email"
                  id="email"
                  name="email"
                  required="true"
                  placeholder="Masukan Email Anda"
                  autofocus="autofocus"
                >
                </text-input>

                <text-input
                  v-model="password"
                  label="Password"
                  type="password"
                  id="password"
                  name="password"
                  required="true"
                  placeholder="Masukan Password Anda"
                >
                </text-input>

                <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-primary btn-lg btn-block"
                  >
                    Login
                  </button>
                </div>
              </form-tag>

              <div class="mt-5 text-muted text-center">
                Don't have an account?
                <a href="javascript:void(0)">Create One</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
