<template>
  <div id="app">
    <md-progress-spinner v-if="isLoading" md-mode="indeterminate"></md-progress-spinner>

    <template v-if="!isLoading">
      <template v-if="items.length > 0">
        <UsersList :items="items"/>
      </template>
      <template v-else>
        <div class="md-title">There's no elements available.</div>
      </template>
    </template>
  </div>
</template>

<script>
import axios from 'axios';
import UsersList from '@/components/Users/List';

export default {
  name: 'App',

  components: {
    UsersList
  },

  data: () => ({
    items: [],
    isLoading: false
  }),

  created: async function() {
    try {
      this.isLoading = true;

      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
      this.items = data;
    } catch (ex) {
      console.log(ex);
    } finally {
      setTimeout(() => {
        this.isLoading = false;
      }, 2000)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
