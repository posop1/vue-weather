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

const fetchFourDaysWeather = async () => {
  try {
    isLoading.value = true

    const { data } = await api.get<ICurrentWeather>('/forecast/daily?cnt=4', {
      params: {
        q: route.params.cityName
      }
    })

    weather.value = data

    console.log(data)

    isLoading.value = false
  } catch (error) {
    router.push('/notFound')
    removeCityInLocalStorage()
  }
}

onMounted(() => {
  fetchFourDaysWeather()
})
</script>

<template>
  <Loading v-if="isLoading" />
  <div
    v-else
    class="container"
  ></div>
</template>

<style scoped lang="scss">
.container {
  color: black;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
