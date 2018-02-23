<template>
  <div id="app">
    <privilegePlan></privilegePlan>
  </div>
</template>

<script>
import PrivilegePlan from './components/PrivilegePlan';

export default {
  name: 'app',
  components: {
    PrivilegePlan
  }
};
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 10px;
    margin-left: 20px;
  }
</style>
