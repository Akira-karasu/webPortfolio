<script setup>
import Terminal from '../layout/Terminal.vue';
import BaseButton from '../common/BaseButton.vue';

const goToAbout = () => {
  document.getElementById("aboutSection")?.scrollIntoView({
    behavior: "smooth",
  });
};

const viewResume = () => {
  window.open("/resume/LORD_RAVEN_FLEA_IRIS_A_ENRIQUE_CV.pdf", "_blank")
}

</script>

<template>
  <div class="flex gap-10 items-center justify-center min-h-screen hidden-section">
    <div>
      <h1 class="jetbrains-mono-medium color_green">Lord Raven Flea Iris A. Enrique</h1>
      <h2 class="jetbrains-mono-regular color_pink">Junior Full-Stack Web Developer</h2>
      <br>
      <h3>Focused on</h3>
      <h3 class="color_green">Vue.js • NodeJS • ExpressJS • Restful • MySQL</h3>
      <div class="flex gap-5 mt-4">
        <BaseButton  
          text="ABOUT ME"
          @click="goToAbout"/>
        <BaseButton 
          text="CHECK RESUME"
          @click="viewResume"
        />
      </div>
    </div>
    <Terminal/>
  </div>
</template>

<style scoped>
</style>