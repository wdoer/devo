<script setup>
import { RouterView, useRoute } from "vue-router";
import { NConfigProvider } from "naive-ui";

const route = useRoute();
const themeOverrides = {
  common: {
    primaryColor: "#00000033",
  },
};
</script>

<template>
  <n-config-provider
    :theme-overrides="themeOverrides"
    :class="`${route.name}__wrapper`"
    tag="main"
  >
    <n-message-provider placement="top-right">
      <RouterView />
    </n-message-provider>
  </n-config-provider>
</template>
