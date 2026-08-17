<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const commands = [
  "whoami",
  "ls -la",
  "pwd",
  "cat about.txt",
  "npm run dev",
  "git status",
  "git log --oneline",
  "npm install",
  "npm run build",
  "node server.js",
  "docker ps",
  "sudo rm -rf /",
  "docker compose up",
  "php artisan serve",
  "composer install",
  "python main.py",
  "curl https://api.github.com",
  'echo "Hello World"',
  "clear",
  "tree",
  "code .",
];

const typing = ref("");

let commandIndex = 0;
let charIndex = 0;
let deleting = false;
let timeoutId;

function animateTyping() {
  const current = commands[commandIndex];

  if (!deleting) {
    typing.value = current.slice(0, ++charIndex);

    if (charIndex === current.length) {
      deleting = true;
      timeoutId = setTimeout(animateTyping, 1800);
      return;
    }
  } else {
    typing.value = current.slice(0, --charIndex);

    if (charIndex === 0) {
      deleting = false;
      commandIndex = (commandIndex + 1) % commands.length;
    }
  }

  timeoutId = setTimeout(animateTyping, deleting ? 35 : 90);
}

onMounted(() => {
  animateTyping();
});

onUnmounted(() => {
  clearTimeout(timeoutId);
});
</script>

<template>
  <div class="container">
    <div class="terminal_toolbar">
      <div class="butt">
        <button class="btn btn-color"></button>
        <button class="btn"></button>
        <button class="btn"></button>
      </div>

      <p class="user">root: ~</p>

      <button class="add_tab">+</button>
    </div>

    <div class="terminal_body">
      <div class="terminal_promt">
        <span class="terminal_user">root:</span>
        <span class="terminal_location">~</span>
        <span class="terminal_bling"># cat file.txt</span>
      </div>

      <div class="terminal_promt">
        <div class="terminal_output">
          <pre class="output_text">
======================== Welcome to my Web-Portfolio ========================
          </pre>


          <pre class="output_text">
Hello, I'm Lord Raven Flea Iris A. Enrique
your junior fullstack web developer
          </pre>

          <pre class="output_text">
I enjoy building modern, responsive, and user-friendly
web applications that solve real-world problems.
          </pre>

          <pre class="output_text">
I'm passionate about writing clean, maintainable code, learning new frameworks
and creating applications that deliver a great user experience.

I'm currently seeking opportunities where I can contribute, grow as a
developer and collaborate with experienced teams.
          </pre>

          <pre class="output_text">
Let's build something amazing together.
          </pre>


          <pre class="output_text">
=============================================================================
          </pre>
        </div>
      </div>

      <div class="terminal_promt" style="margin: 0px;">
        <span class="terminal_user">root:</span>
        <span class="terminal_location">~</span>
        <span class="terminal_bling"># {{ typing }}</span>
        <span class="terminal_cursor"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 550px;
  height: auto;
  background: #1e1e1e;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.terminal_toolbar {
  display: flex;
  height: 35px;
  align-items: center;
  padding: 0 15px;
  background: #2d2d2d;
  justify-content: space-between;
}

.butt {
  display: flex;
  align-items: center;
}

.btn {
  height: 13px;
  width: 13px;
  border-radius: 50%;
  margin-right: 8px;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.btn:hover {
  transform: scale(1.1);
}

.btn-color:nth-child(1) {
  background: #ff5f56;
}

.btn-color:nth-child(2) {
  background: #ffbd2e;
}

.btn-color:nth-child(3) {
  background: #27c93f;
}

.add_tab {
  border: none;
  color: #fff;
  background: #3a3a3a;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.add_tab:hover {
  background: #4a4a4a;
}

.user {
  color: white;
  font-size: 14px;
  font-weight: bold;
}

.terminal_body {
  background: #212121;
  height: calc(100% - 35px);
  padding: 15px;
  font-family: Consolas, monospace;
  font-size: 14px;
  line-height: 1.5;
  overflow-y: auto;
}

.terminal_promt {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.terminal_user {
  color: #0bff71;
  margin-right: 5px;
}

.terminal_location {
  color: #0066ff;
  margin-right: 5px;
}

.terminal_bling {
  color: #ff00ff;
}

.terminal_cursor {
  display: inline-block;
  width: 9px;
  height: 18px;
  background: white;
  animation: cursorBlink 0.8s infinite;
}

.terminal_output {
  flex-grow: 1;
}

.output_text {
  margin: 0;
  color: white;
  white-space: pre-wrap;
}

pre, p, span{
  font-size: 11px;
}

@keyframes cursorBlink {
  0%,
  45% {
    opacity: 1;
  }

  50%,
  100% {
    opacity: 0;
  }
}
</style>