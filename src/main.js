import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/style.css";
import "./assets/styles/animation.css";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  easing: "ease-out-cubic",
  once: true,
});

createApp(App).mount("#app");
