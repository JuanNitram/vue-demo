<template>
    <md-card>
      <md-card-header>
        <div class="container">
          <div class="md-title">
            {{ item.name }}
          </div>
          
          <img :src="item.image" width="80" height="80"/> 
        </div>
      </md-card-header>

      <md-card-content>
        {{ item.email }} | {{ item.website }} | {{ item.company.name }}
      </md-card-content>
    </md-card>
</template>

<script>
export default {
    name: "UsersItem",

    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>
    .md-card {
        margin: 1rem;
    }

    img {
      border-radius: 100%;
    }
</style>