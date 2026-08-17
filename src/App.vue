<script setup>
import HeroSection from './components/sections/HeroSection.vue';
import AboutSection from './components/sections/AboutSection.vue';
import SkillsSection from './components/sections/SkillsSection.vue';
import ProjectsSection from './components/sections/ProjectsSection.vue';
import ContactSection from './components/sections/ContactSection.vue';
import Navbar from './components/layout/Navbar.vue';
import { useScrollReveal } from './composables/useScrollReveal.js';

useScrollReveal();

</script>

<template>
  <Navbar/>
  <HeroSection id="heroSection"/>
  <AboutSection id="aboutSection"/>
  <SkillsSection id="skillsSection" class="hidden-section"/>
  <ProjectsSection id="projectsSection" class="hidden-section"/>
  <ContactSection id="contactSection" class="hidden-section"/>
</template>

<style scoped></style>
