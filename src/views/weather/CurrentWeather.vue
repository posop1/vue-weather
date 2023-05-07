<script lang="ts" setup>
import api from '@/api/instance'
import Loading from '@/components/Loading.vue'
import { removeCityInLocalStorage } from '@/service/city'
import { ICurrentWeather } from '@/types/CurrentWeather'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const weather = ref<ICurrentWeather>()

const isLoading = ref<boolean>(false)

const fetchCurrentWeather = async () => {
  try {
    isLoading.value = true

    const { data } = await api.get<ICurrentWeather>('/weather', {
      params: {
        q: route.params.cityName
      }
    })

    weather.value = data

    isLoading.value = false
  } catch (error) {
    router.push('/notFound')
    removeCityInLocalStorage()
  }
}

onMounted(() => {
  fetchCurrentWeather()
})
</script>

<template>
  <Loading v-if="isLoading" />
  <div
    class="container"
    v-else
  >
    <h2>{{ weather?.name }}</h2>
    <div class="main">
      <div class="box">
        <img
          :src="`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`"
          alt="weather"
        />
        <h3>{{ weather?.main.temp.toString().slice(0, 2) }}</h3>
        <span>Feels Like: {{ weather?.main.feels_like.toString().slice(0, 2) }}</span>
      </div>
      <div class="box info">
        <span>Max Temp: {{ weather?.main.temp_max }}</span>
        <span>Min Temp: {{ weather?.main.temp_min }}</span>
        <span>Wind: {{ weather?.wind.speed }}m/s</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  color: black;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.box {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 25px;
    margin-bottom: 15px;
  }
}

.info {
  font-size: 18px;
  gap: 20px;
}
</style>
