<script setup>
import { contacts } from '@/data/contacts'
import BaseAnchor from '../common/BaseAnchor.vue'
</script>

<template>
  <div class="flex items-center justify-center min-h-screen gap-25 hidden-section">
    <div class="flex gap-4 flex-col">
      <h1 class="jetbrains-mono-medium color_green">Intersted in working together?</h1>
      <h3 class="jetbrains-mono-light color_pink">
        Whether you have a project, collaboration or opportunity <br />feel free to reach out.
      </h3>
      <h4 class="jetbrains-mono-light">Contact me</h4>
      <div class="flex flex-wrap gap-3">
        <div class="flex" v-for="link in contacts" :key="link.platform">
          <BaseAnchor :href="link.link" :image="link.logo" :alt="link.platform" />
        </div>
      </div>
    </div>
    <img src="/images/picture/emailCampeign.png" alt="Contact" width="550px" height="auto" />
  </div>
</template>

<style scoped></style>
