<script>
import { defineComponent, ref } from "vue";
import FormTag from "../components/forms/FormTag.vue";
import TextInput from "../components/forms/TextInput.vue";
import Security from "../router/security";
import { useAuthStore } from "../stores/auth";

export default defineComponent({
  name: "LoginComposition",
  props: {},
  emits: ["error"],
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
          if (response.error) {
            ctx.emit("error", response.message);
          } else {
            const auth = useAuthStore();
            auth.user = response.data.token.token;
            auth.user = {
              id: response.data.user.id,
              first_name: response.data.user.first_name,
              last_name: response.data.user.last_name,
              email: response.data.user.email,
            };
            // save info to cookie
            let date = new Date();
            let expDays = 1;
            date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
            const expires = "expires=" + date.toUTCString();
            // set the cookie
            document.cookie =
              "_site_data=" +
              JSON.stringify(response.data) +
              "; " +
              expires +
              "; path=/; SameSite=strict; Secure;";
            window.location.href = "/";
          }
        });
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
