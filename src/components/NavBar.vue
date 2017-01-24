<template>
  <header>
    <h3>
      <router-link to="/">Go to Home Page.</router-link>
      <router-link to="/pageA">Go to PageA.</router-link>
      <router-link to="/pageB">Go to PageB.</router-link>
    </h3>
    <slot />
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {};
  },
};
</script>
