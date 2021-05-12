<template>
  <div id="app">
    <md-progress-spinner v-if="isLoading" md-mode="indeterminate"></md-progress-spinner>

    <template v-if="!isLoading">
      <template v-if="users.length > 0">
        <UsersList :items="users"/>
      </template>
      <template v-else>
        <div class="md-title">There's no elements available.</div>
      </template>
    </template>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import UsersList from '@/components/Users/List'

export default {
  name: 'App',

  components: {
    UsersList
  },

  data: () => ({
    isLoading: false
  }),

  created: async function() {
    try {
      this.isLoading = true
      await this.getUsers()
    } catch (ex) {
      console.log(ex)
    } finally {
      setTimeout(() => {
        this.isLoading = false;
      }, 3000)
    }
  },

  methods: {
    ...mapActions({
      getUsers: 'getUsers'
    })
  },

  computed: {
    ...mapState({
      users: state => state.users.map(user => 
        ({
          name: user.name,
          email: user.email,
          website: user.website,
          company: {
            name: user.company.name
          },
          image: `https://picsum.photos/2${Math.floor((Math.random() * 10) + 1)}`
        })
      )
    })
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
