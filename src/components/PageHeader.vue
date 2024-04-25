<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  showLogo: {
    type: Boolean,
    default: false,
  },
  showBack: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <header class="header">
    <a
      v-if="showBack"
      href="#"
      @click="router.back()"
      class="router-link--back"
    >
      Back
    </a>
    <router-link v-if="showLogo" to="/" class="header__logo">
      <img src="@/assets/logo.svg" alt="header logo" />
    </router-link>
  </header>
</template>

<style>
.header {
  width: 100%;

  display: flex;
  align-items: start;
  justify-content: space-evenly;
}
.router-link--back {
  position: relative;

  padding-left: 13px;

  color: #00000033;
}

.router-link--back::before {
  content: "<";
  position: absolute;
  top: 0;
  left: 0;

  line-height: 1.5;
}
</style>
