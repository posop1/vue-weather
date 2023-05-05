<script lang="ts" setup>
interface SearchCityAlertProps {
  message: string
}

const props = defineProps<SearchCityAlertProps>()
</script>

<template>
  <div class="alert">
    <span>{{ props.message }}</span>
  </div>
</template>

<style lang="scss" scoped>
.alert {
  display: flex;
  justify-content: center;
  background: #41b883;
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 50px;

  span {
    font-size: 20px;
  }
}
</style>
