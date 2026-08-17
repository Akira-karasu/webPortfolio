// useScrollReveal.js

import { onMounted, onUnmounted } from "vue";

export function useScrollReveal(selector = ".hidden-section", scrollContainer = null) {
  let observer;

  const observe = () => {
    document.querySelectorAll(selector).forEach((el) => {
      observer.observe(el);
    });
  };

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        root: scrollContainer?.value || null,
        threshold: 0.15,
      },
    );

    observe();
  });

  onUnmounted(() => {
    observer?.disconnect();
  });

  return {
    observe,
  };
}
