<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const active = ref("heroSection");

const links = [
  { id: "heroSection", label: "Home" },
  { id: "aboutSection", label: "About" },
  { id: "skillsSection", label: "Skills" },
  { id: "projectsSection", label: "Projects" },
  { id: "contactSection", label: "Contacts" },
];

const updateActiveSection = () => {
  const scrollPosition = window.scrollY + window.innerHeight / 3;

  for (const link of links) {
    const section = document.getElementById(link.id);

    if (!section) continue;

    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;

    if (scrollPosition >= top && scrollPosition < bottom) {
      active.value = link.id;
      break;
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", updateActiveSection);
  updateActiveSection(); // Set initial active section
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateActiveSection);
});
</script>

<template>
  <ul
    class="fixed top-0 left-0 z-50 flex justify-center gap-25 p-5 w-full backdrop-blur-md"
  >
    <li v-for="link in links" :key="link.id">
      <a
        :href="`#${link.id}`"
        @click="active = link.id"
        :class="{ active: active === link.id }"
        class="nav-link"
      >
        {{ link.label }}
      </a>
    </li>
  </ul>
</template>

<style scoped>
.nav-link {
  color: white;
  border-bottom: 2px solid transparent;
  padding-bottom: 4px;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.nav-link:hover,
.nav-link.active {
  color: #0BDC3D;
  border-bottom-color: #0BDC3D;
}
</style>