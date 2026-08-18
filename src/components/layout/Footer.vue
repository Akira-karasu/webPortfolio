<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="w-full border-t border-[#0BDC3D]/20 bg-black/30 px-6 py-8 backdrop-blur-md">
    <div class="mx-auto flex max-w-7xl flex-col items-center gap-5">
      <!-- Name / Branding -->
      <div class="text-center">
        <h2 class="jetbrains-mono-regular text-[#0BDC3D]">LORD RAVEN FLEA IRIS A. ENRIQUE</h2>

        <p class="jetbrains-mono-light mt-1 text-sm text-gray-400">
          Junior Full-Stack Web Developer
        </p>
      </div>

      <!-- Navigation -->
      <nav>
        <ul class="flex flex-wrap justify-center gap-6 text-sm">
          <li>
            <a href="#heroSection" class="footer-link"> Home </a>
          </li>

          <li>
            <a href="#aboutSection" class="footer-link"> About </a>
          </li>

          <li>
            <a href="#skillsSection" class="footer-link"> Skills </a>
          </li>

          <li>
            <a href="#projectsSection" class="footer-link"> Projects </a>
          </li>

          <li>
            <a href="#contactSection" class="footer-link"> Contact </a>
          </li>
        </ul>
      </nav>

      <!-- Divider -->
      <div class="h-px w-full bg-[#0BDC3D]/10"></div>

      <!-- Copyright -->
      <div class="text-center">
        <p class="jetbrains-mono-light text-xs text-gray-500">
          © {{ currentYear }} Web Portfolio. All rights reserved.
        </p>

        <p class="jetbrains-mono-light mt-1 text-xs text-gray-600">
          Built with Vue.js & Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  color: #9ca3af;
  transition: all 0.3s ease;
}

.footer-link:hover {
  color: #0bdc3d;
}

.social-link {
  color: #9ca3af;
  transition: all 0.3s ease;
}

.social-link:hover {
  color: #0bdc3d;
  transform: translateY(-2px);
}
</style>
