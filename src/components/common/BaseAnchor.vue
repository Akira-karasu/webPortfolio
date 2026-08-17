<script setup>
defineProps({
  href: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    default: '40px',
  },
  height: {
    type: String,
    default: '40px',
  },
  alt: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="image-link"
    :style="{
      width: width,
      height: height,
    }"
  >
    <img :src="image" :alt="alt" class="image-link__image" />
  </a>
</template>

<style scoped>
.image-link {
  display: flex;
  align-items: center;
  justify-content: center;

  background: #0bdc3d;
  border-radius: 50%;

  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
}

.image-link__image {
  width: 60%;
  height: 60%;
  object-fit: contain;

  /* White */
  filter: brightness(0) invert(1);

  transition: filter 0.3s ease;
}

.image-link:hover {
  background: white;
}

.image-link:hover .image-link__image {
  /* #DB00F1 */
  filter: brightness(0) saturate(100%) invert(18%) sepia(98%) saturate(7472%) hue-rotate(291deg)
    brightness(102%) contrast(132%);
}
</style>
