<template>

  <header class="justify-between flex items-center q-py-2l q-px-10l">
    <img src='@/assets/Logo.svg'>

    <div class="flex">
      <RouterLink class="q-mr-3s bg-deep-purple-1 q-pa-sm rounded-borders flex items-center" to="/">
        <QIcon name="place" class="q-mr-sm" size="sm" color="deep-purple-6" />
        <span class="text-deep-purple-10 text-body2">Minas Gerais, MG</span>
      </RouterLink>
      <RouterLink class="bg-amber-2 q-pa-sm rounded-borders flex items-center" to="/product">
        <QIcon name="shopping_cart" size="sm" color="yellow-10" />
      </RouterLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import { QIcon } from 'quasar';


</script>