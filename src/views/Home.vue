<script setup lang="ts">
import { useCounterStore } from '@/stores/CounterStore'
import { QIcon, QAvatar } from 'quasar';
const store = useCounterStore()
import { coffees } from '@/data.json'
import CoffeeCard from '@/components/CoffeeCard.vue';
</script>

<template>
  <div>
    <img src="@/assets/Background.png" fit="fill" style="height: 544px;" class="full-width absolute">
    <div class="justify-between flex" style="padding: 92px 160px;">

      <div>
        <div class="flex column">
          <h3>Encontre o café perfeito <br> para qualquer hora do dia</h3>
          <span class="q-mt-md">Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora</span>
        </div>

        <div class="flex row q-gutter-md" style="margin-top: 66px;">

          <div>
            <div class="flex row items-center q-mb-sm">
              <QAvatar class="bg-yellow-10 q-mr-md" size="32px">
                <QIcon name="shopping_cart" size="xs" color="white" />
              </QAvatar>
              <p class="text-body1 q-my-none">Compra simples e segura</p>
            </div>

            <div class="flex row items-center q-mb-sm">
              <QAvatar class="bg-yellow-8 q-mr-md" size="32px">
                <QIcon name="local_shipping" size="xs" color="white" />
              </QAvatar>
              <p class="text-body1 q-my-none">Entrega rápida e rastreada</p>
            </div>
          </div>

          <div>
            <div class="flex row items-center q-mb-sm">
              <QAvatar class="bg-brown-8 q-mr-md" size="32px">
                <QIcon name="inventory_2" size="xs" color="white" />
              </QAvatar>
              <p class="text-body1 q-my-none">Embalagem mantém o café intacto</p>
            </div>

            <div class="flex row items-center q-mb-sm">
              <QAvatar class="bg-deep-purple-6 q-mr-md" size="32px">
                <QIcon name="coffee" size="xs" color="white" />
              </QAvatar>
              <p class="text-body1 q-my-none">O café chega fresquinho até você</p>
            </div>
          </div>

        </div>
      </div>
      <img src="@/assets/CoffeeHero.svg" alt="Café">
    </div>
    <div style="padding: 0 160px;">
      <h4>Nossos cafés</h4>
      <div>
        <div v-for="coffee in coffees" :key="coffee.id">
          <CoffeeCard :coffee="coffee" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Se quiser personalizar mais, pode adicionar estilos aqui */
</style>
