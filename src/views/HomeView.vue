<template>
  <div class="home">
  <section class="HomeView">
    <UserformComp />
    <br />
    <UserListComp />
  </section>
  </div>
</template>

<script>

import UserformComp from '@/components/UserformComp.vue'
import UserListComp from "@/components/UserListComp.vue";

export default {
  name: 'HomeView',
  components: {
    UserformComp,
    UserListComp
  }
}
</script>

<style>
.HomeView {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 4% 2%;
}
</style>