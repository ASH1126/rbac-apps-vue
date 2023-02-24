<script>
import { RouterView } from "vue-router";
import { notify } from "@kyvg/vue3-notification";
export default {
  name: "App",
  methods: {
    success(title, msg) {
      notify({
        title: title,
        text: msg,
        type: "success",
      });
    },
    error(title, msg) {
      notify({
        title: title,
        text: msg,
        type: "error",
      });
    },
    warning(title, msg) {
      notify({
        title: title,
        text: msg,
        type: "warn",
      });
    },
    info(title, msg) {
      notify({
        title: title,
        text: msg,
        type: "info",
      });
    },
  },
};
</script>

<template>
  <notifications position="top right" />
  <RouterView
    @success="success"
    @error="error"
    @warning="warning"
    @info="info"
  />
</template>
