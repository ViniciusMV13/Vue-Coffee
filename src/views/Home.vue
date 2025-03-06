<script setup lang="ts">
import {useCounterStore} from '@/stores/CounterStore'
const store = useCounterStore()
</script>

<template>
 {{ store.count }}
 {{ store.showCount }}

  <button @click="store.increment">Increment</button>
  <RouterLink to="/product">Product</RouterLink>
</template>

<style scoped>

</style>
