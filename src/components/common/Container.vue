<script setup>
defineProps({
  layout:{
    type: String,
    default: ""
  },
  width: {
    type: String,
    default: "w-full",
  },
  height: {
    type: String,
    default: "h-auto",
  },
});
</script>

<template>
  <div :class="['container', width, height, layout]">
    <slot />
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
  border: 1px solid #19192B;
  border-radius: 10px;
  box-shadow: 0 8px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 6%);
}
</style>