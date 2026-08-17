<script setup>
import { techstack, toolsAndPlat } from '@/data/techsAndtools';
import Container from '../common/Container.vue';
</script>

<template>
  <div
    class="flex min-h-screen flex-col items-center justify-center gap-10 py-20"
  >

    <h1 class="jetbrains-mono-regular w-7xl text-center hidden-section">
      TECH SKILLS
    </h1>

    <Container
      layout="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center hidden-section"
    >
      <div
        v-for="tech in techstack"
        :key="tech.id"
        class="group relative flex w-full flex-col items-center gap-2 rounded-lg border border-transparent p-4 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#0BDC3D]/50 hover:bg-[#0BDC3D]/5 hover:shadow-[0_0_20px_rgba(11,220,61,0.15)]"
      >
        <span
          class="absolute left-2 top-2 text-[#0BDC3D] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          &gt;
        </span>

        <img
          :src="tech.logo"
          :alt="tech.techName"
          class="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
        />
        <h4
          class="jetbrains-mono-light text-center transition-colors duration-300 group-hover:text-[#0BDC3D]"
        >
          {{ tech.techName.toUpperCase() }}
        </h4>
      </div>
    </Container>

    <h1 class="jetbrains-mono-regular w-7xl pt-10 text-center hidden-section">
      TOOLS &amp; PLATFORMS
    </h1>

    <Container
      layout="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center hidden-section"
    >
      <div
        v-for="toolandplat in toolsAndPlat"
        :key="toolandplat.id"
        class="group relative flex w-full flex-col items-center gap-2 rounded-lg border border-transparent p-4 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#0BDC3D]/50 hover:bg-[#0BDC3D]/5 hover:shadow-[0_0_20px_rgba(11,220,61,0.15)]"
      >
        <span
          class="absolute left-2 top-2 text-[#0BDC3D] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          &gt;
        </span>

        <img
          :src="toolandplat.logo"
          :alt="toolandplat.toolName"
          class="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
        />

        <h4
          class="jetbrains-mono-light text-center transition-colors duration-300 group-hover:text-[#0BDC3D]"
        >
          {{ toolandplat.toolName.toUpperCase() }}
        </h4>
      </div>
    </Container>

  </div>
</template>

<style scoped>
</style>