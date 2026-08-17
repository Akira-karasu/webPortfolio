<script setup>
const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
});

const model = defineModel();
</script>

<template>
  <div class="select-wrapper">
    <select
      v-model="model"
      class="custom-select"
    >
      <option
        v-for="option in props.options"
        :key="option"
        :value="option"
      >
        {{ option }}
      </option>
    </select>

    <svg
      class="select-arrow"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m6 9 6 6 6-6"
      />
    </svg>
  </div>
</template>

<style scoped>
.select-wrapper {
  position: relative;
  width: auto;
}

.custom-select {
  width: auto;
  padding: 10px 40px 10px 14px;

  background-color: #18181b;
  color: #db00f1;

  border: 1px solid #3f3f46;
  border-radius: 8px;

  font-size: 16px;
  cursor: pointer;
  outline: none;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.custom-select option {
  background-color: #18181b;
  color: #ffffff;
  padding: 10px;
}

.custom-select:hover {
  border-color: #71717a;
}

.select-arrow {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);

  width: 18px;
  height: 18px;

  color: #db00f1;

  pointer-events: none;
}
</style>