<template>
  <temperature class="cold" :url="url" :msg="msg" />
</template>

<script>
import Temperature from './Temperature';

export default {
  name: 'colder',
  components: {
    temperature: Temperature,
  },
  data() {
    return {
      url: '/hotter',
      msg: 'Colder',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cold {
  background: blue;
}
</style>
