<template>
  <temperature class="hot" :url="url" msg="Hotter" />
</template>

<script>
import Temperature from './Temperature';

export default {
  name: 'hotter',
  components: {
    temperature: Temperature,
  },
  data() {
    return {
      url: '/colder',
      msg: 'Hotter',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hot {
  background: red;
}
</style>
