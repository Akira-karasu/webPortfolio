<script setup>
defineProps({
  text: {
    type: String,
    default: "Text",
  },
  width: {
    type: String,
    default: "w-50",
  },
});

const emit = defineEmits(["click"]);
</script>

<template>
  <button :class="width" @click="emit('click')">
    {{ text }}
  </button>
</template>
<style scoped>
button {
  padding: 10px;
  background-color: #0BDC3D;
  border: 1px solid #0BDC3D;
  transition: color 0.2s ease, border-color 0.2s ease;
}

button:hover {
  color: #DB00F1;
  background-color: #ffffff;
  border: 1px solid #DB00F1;
  transition: color 0.2s ease, border-color 0.2s ease;
}
</style>