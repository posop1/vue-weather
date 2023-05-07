<script lang="ts" setup></script>

<template>
  <div class="main">
    <h1>City Not found</h1>
    <RouterLink
      to="/"
      class="link"
      >Home</RouterLink
    >
  </div>
</template>

<style scoped lang="scss">
.main {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #41b883;
  color: white;

  flex-direction: column;
}

.link {
  margin-top: 20px;

  background: #fff;
  padding: 8px 15px;
  border: none;
  outline: none;
  border-radius: 10px;
  cursor: pointer;
  color: black;
  font-size: 20px;
  transition: 0.1s;

  &:hover {
    background: #ffffffc0;
  }
}
</style>
