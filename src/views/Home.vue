<script setup lang="ts">
import SearchCityAlert from '@/components/Alerts/SearchCityAlert.vue'
import { getCityInLocalStorage, setCityInLocalStorage } from '@/service/city'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const cityName = ref<string>('')
const isError = ref<boolean>(false)

const lastCity = getCityInLocalStorage()

const getWeatherHandler = () => {
  const name = cityName.value.split(' ').join('')

  if (name === '' || !name) {
    cityName.value = ''
    isError.value = true
    return
  }

  setCityInLocalStorage(name)
  router.push(`/weather/${name}/current`)

  cityName.value = ''
  isError.value = false
}

onMounted(() => {
  if (lastCity) {
    router.push(`weather/${lastCity}/current`)
    return
  }
})
</script>

<template>
  <main class="main">
    <div class="box">
      <h1 class="logo">Vue Weather</h1>
      <p>It's pet-projetc for my practice</p>
      <SearchCityAlert
        v-if="isError"
        :message="'City name is not validate'"
      />
      <input
        v-model="cityName"
        @keyup.enter="getWeatherHandler"
        class="search__inpt"
        type="text"
        placeholder="City Name"
      />
      <button
        class="search__btn"
        @click="getWeatherHandler"
      >
        Search
      </button>
    </div>
  </main>
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
  max-width: 600px;
  width: 100%;
  padding: 25px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(255, 255, 255, 0.973);

  .logo {
    font-size: 40px;
  }
  p {
    font-size: 20px;
    margin-bottom: 50px;
  }

  .search__inpt {
    background: #fff;
    padding: 8px 15px;
    border: none;
    outline: none;
    border-radius: 10px;
    width: 100%;
    font-size: 20px;
    margin-bottom: 25px;
  }
  .search__btn {
    background: #fff;
    padding: 8px 15px;
    border: none;
    outline: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 20px;
    width: 25%;
    transition: 0.1s;
    width: 100%;

    &:hover {
      background: #ffffffc0;
    }
  }
}
</style>
