<script setup>
import { ref, computed } from 'vue'
import BaseSelect from '../common/BaseSelect.vue'
import { projects } from '@/data/projects.js'
import Container from '../common/Container.vue'
import BaseAnchor from '../common/BaseAnchor.vue'

const years = Object.keys(projects).map(Number)

const selectedYear = ref(years[years.length - 1])

const filteredProjects = computed(() => {
  return projects[selectedYear.value] || []
})
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center gap-5 py-20">
    <!-- Title -->
    <h1 class="jetbrains-mono-regular w-7xl text-center hidden-section">PROJECTS</h1>

    <!-- Year Selection -->
    <div class="flex items-center gap-5">
      <h2>YEAR PROJECT</h2>

      <BaseSelect :options="years" v-model="selectedYear" />
    </div>

    <!-- Projects -->
    <div v-if="filteredProjects.length > 0" class="w-7xl">
      <div
        v-for="project in filteredProjects"
        :key="project.projectTitle"
        class="row flex gap-5 mb-9"
      >
        <img :src="project.image" :alt="project.projectTitle" class="photo-image" />

        <Container>
          <h3 class="jetbrains-mono-light color_pink mb-2">
            {{ project.projectTitle }}
          </h3>

          Type Project:
          <span class="border rounded-lg bg-neutral-800 py-1 px-3">
            {{ project.typeProject }}
          </span>

          Role:
          <span class="border rounded-lg bg-neutral-800 py-1 px-3">
            {{ project.role }}
          </span>

          <p class="mt-5 color_green">Description</p>

          <p class="mt-2 mb-3">
            {{ project.description }}
          </p>

          <p class="color_green mb-2">Tech Stack</p>

          <div class="flex flex-wrap gap-2 mb-3">
            <div v-for="tech in project.techStack" :key="tech">
              <p class="jetbrains-mono-extralight bg-[#0BDC3D] py-1 px-3 rounded-lg">{{ tech }}</p>
            </div>
          </div>

          <p class="color_green mb-2">Links</p>
          <div class="flex flex-wrap gap-2">
            <div v-for="link in project.links" :key="link.platform">
              <BaseAnchor :href="link.link" :image="link.logo" :alt="link.platform" />
            </div>
          </div>
        </Container>
      </div>
    </div>

    <!-- No Projects -->
    <div v-else class="flex flex-col items-center justify-center py-20">
      <h3 class="jetbrains-mono-light">No projects available for {{ selectedYear }}.</h3>
    </div>
  </div>
</template>

<style scoped>
.row:nth-child(even) {
  flex-direction: row-reverse;
}
</style>
