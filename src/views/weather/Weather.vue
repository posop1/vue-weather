<script setup lang="ts">
import Navigation from '@/components/Navigation.vue'
</script>

<template>
  <div class="main">
    <div class="box">
      <Navigation />
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #41b883;
  padding: 15px;
}
.box {
  max-width: 800px;
  width: 100%;
  border-radius: 10px;
  background: white;
}
</style>
