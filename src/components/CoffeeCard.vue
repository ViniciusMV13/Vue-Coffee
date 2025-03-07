<script setup lang="ts">
interface TCoffee {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
}

defineProps({
  coffee: {
    type: Object as () => TCoffee,
    required: true
  }
})
</script>

<template>
  <div class="bg-blue-grey-1 q-mb-lg flex" style="width: 256px; height: 310px; border-radius: 6px 36px;">
    <div class="flex items-center column">
      <img :src="coffee.image" alt="Café" style="margin-top: -20px;">
      <div class="flex row q-gutter-sm q-mt-md">
        <span v-for="tag in coffee.tags" :key="tag" class="bg-warning text-yellowDark rounded-borders q-px-sm q-py-xs">
          {{ tag }}
        </span>
      </div>
      <div class="flex column text-center">
        <h4>{{ coffee.title }}</h4>
        <p class="text-body2 q-mt-sm">{{ coffee.description }}</p>

      </div>
    </div>
  </div>
</template>
