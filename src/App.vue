<template>
  <div id="app">
    <template v-if="items.length > 0">
      <UsersList :items="items"/>
    </template>
    <template v-else>
      <div class="md-title">There's no elements available.</div>
    </template>
  </div>
</template>

<script>
import UsersList from '@/components/Users/List';

export default {
  name: 'App',

  components: {
    UsersList
  },

  data: () => ({
    items: [
      {
          name: 'Leanne Graham',
          email: 'Sincere@april.biz',
          website: 'hildegard.org',
          company: {
            name: 'Romaguera-Crona'
          }
      },
      {
        name: 'Ervin Howell',
        email: 'Shanna@melissa.tv',
        website: 'anastasia.net',
        company: {
          name: 'Deckow-Crist'
        }
      }
    ]
  })
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
