
<!-- ButtonPro.vue -->
<template>
  <button
    :class="colors"
    class="p-3 px-6 font-semibold m-2 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
  >
    {{ content }}
  </button>
</template>

<script setup>
const props = defineProps({
  content: String,
  colors: String
})

</script>