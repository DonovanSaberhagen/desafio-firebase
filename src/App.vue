<template>
  <div class="bar">
  <nav>
    <router-link to="/">Casa</router-link> |
    <router-link to="/about">Nada</router-link>
  </nav>
</div>
  <router-view/>
</template>

<style>
.bar{
  text-align: center;
  padding-top: 2%;

}
</style>