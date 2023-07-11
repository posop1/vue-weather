<script setup lang="ts">
import { removeCityInLocalStorage } from '@/service/city'
import { links } from '@/utils/constants'
import { useRouter } from 'vue-router'

const router = useRouter()

const changeCityHandler = () => {
  removeCityInLocalStorage()

  router.push('/')
}
</script>

<template>
  <div class="nav">
    <div class="links">
      <RouterLink
        v-for="link in links"
        :key="link.name"
        :to="link.to"
        class="link"
      >
        {{ link.name }}
      </RouterLink>
    </div>
    <button
      class="change__btn"
      @click="changeCityHandler"
    >
      Change City
    </button>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #41b883;
  flex-wrap: wrap;
}

.links {
  display: flex;
  align-items: center;
}

.link {
  padding: 10px 15px;
  color: black;
  transition: 0.1s;
  font-size: 16px;

  &:first-child {
    border-radius: 10px 0px 0px 0px;
  }

  &:hover {
    background: #0180ff3a;
  }
}

.change__btn {
  padding: 10px 15px;
  border-radius: 0px 10px 0px 0px;
  border: none;
  background: none;
  color: black;
  font-size: 16px;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    background: #0180ff3a;
  }
}
</style>
