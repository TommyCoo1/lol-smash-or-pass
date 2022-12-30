<template>
  <MainLayout>
    <template #body>
      <div class="row justify-center">
        <h1>Congratulations you finished it! 🚀🚀🚀</h1>
        <q-img src="https://media.tenor.com/EABSY0thgFMAAAAM/party-hard-anime.gif" height="20%"
        width="30%"></q-img>
      </div>
      <div class="row justify-center q-pt-md">
        <q-btn class="bg-blue text-white" :to="{name:'game'}">Play Again</q-btn>
      </div>
    </template>
  </MainLayout>
</template>


<script setup
        lang="ts">
import MainLayout from '../layouts/MainLayout.vue'
</script>

<style scoped>

</style>
