<template>
  <div class="yep">
    <router-link :to="url">
      <h1>{{ msg }}</h1>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'colder',
  props: {
    url: String,
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: white;
  cursor: pointer;
  text-decoration: none;
}
</style>
