import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCounterStore = defineStore("counter", () => {

  const count = ref(0);
  //   state: () => ({
  //     count: 0,
  //   }),
  //     actions;
  // 	:
  // increment();
  // this.count++;
  // 	,
  // 	,
  function increment() { count.value++; }
  // getters:
  // doubleCount: (state) => state.count * 2,
  // 	,
  const showCount = computed(() => {
    return `O retorno do count é: ${count.value}`;
  });


  return { count, increment, showCount };

});
