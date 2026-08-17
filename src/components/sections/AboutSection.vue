<script setup>
import { ref, computed, nextTick, watch } from 'vue'

import Container from '../common/Container.vue'
import { education } from '@/data/education.js'
import { workExperience } from '@/data/workExperience.js'
import { certificates } from '@/data/certificates.js'
import { useScrollReveal } from '@/composables/useScrollReveal.js'
import BaseButton from '../common/BaseButton.vue'
import AOS from 'aos'

const changeType = async (type) => {
  typeCert.value = type

  await nextTick()

  AOS.refresh()
}

const scrollContainer = ref(null)

const typeCert = ref('others')

const filteredCertificates = computed(() => {
  return certificates[typeCert.value]
})

const { observe } = useScrollReveal('.certificate-card', scrollContainer)

watch(filteredCertificates, async () => {
  await nextTick()
  observe()
})

const viewCert = (link) => {
  window.open(link)
}

const certificateTypes = [
  { key: 'professionals', label: 'Professional' },
  { key: 'freeCourses', label: 'Free Courses' },
  { key: 'workshopsTrainings', label: 'Workshops & Trainings' },
  { key: 'others', label: 'Others' },
]
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen gap-10">
    <!-- ABOUT ME -->
    <div class="flex items-center justify-center gap-12 h-screen hidden-section">
      <img src="../../../images/picture/Enrique.JPG" alt="Profile" class="profile-image" />
      <div class="w-1/2 flex flex-col gap-4">
        <h2 class="jetbrains-mono-regular color_green">LORD RAVEN FLEA IRIS A. ENRIQUE</h2>
        <Container>
          <p>
            My journey into web development started with curiosity and has grown into a passion for
            building modern, scalable, and user-focused applications. I enjoy working across the
            full development process—from crafting intuitive user interfaces to developing backend
            systems, RESTful APIs, and efficient databases.
          </p>
          <br />
          <p>
            As I continue growing as a Full-Stack Web Developer, I'm also exploring cybersecurity,
            with a focus on web application security. Alongside this, I'm practicing Python
            scripting to strengthen my automation, problem-solving, and security skills.
          </p>
          <br />
          <p>
            I'm committed to continuous learning and strive to build software that is not only
            functional and maintainable but also secure by design. My goal is to grow as both a
            developer and an aspiring cybersecurity professional while contributing to meaningful
            projects.
          </p>
        </Container>
      </div>
    </div>
    <!-- EDUCATION -->
    <div class="hidden-section">
      <h2 class="jetbrains-mono-regular color_green text-left w-7xl mb-4">EDUCATION</h2>
      <div v-for="school in education" class="w-7xl" :key="school.id" data-aos="fade-left">
        <div class="flex mb-5 gap-8">
          <Container>
            <h3 class="jetbrains-mono-light color_pink">{{ school.schoolName }}</h3>
            <p class="jetbrains-mono-extralight mb-2">{{ school.course }}</p>
            <span
              :class="school.status === 'Graduated' ? 'green-tag' : 'orange-tag'"
              class="jetbrains-mono-extralight p-1 rounded my-4"
            >
              {{ school.status }} {{ school.yearGraduated }}
            </span>
            <div class="my-4">
              <span class="color_green"> Course work </span>
              <p class="jetbrains-mono-extralight my-1">{{ school.courseWork }}</p>
            </div>
            <div>
              <span class="color_green"> Thesis </span>
              <p class="mt-1">{{ school.thesis.thesisTitle }}</p>
              <p class="jetbrains-mono-extralight mt-1">{{ school.thesis.thesisDescription }}</p>
            </div>
          </Container>
          <img :src="school.schoolImage" alt="schoolPhoto" class="photo-image" />
        </div>
      </div>
    </div>
    <!-- WORK EXPERIENCE -->
    <div class="hidden-section">
      <h2 class="jetbrains-mono-regular color_green text-left w-7xl mb-4">WORK EXPERIENCE</h2>
      <div v-for="work in workExperience" class="w-7xl" :key="work.id" data-aos="fade-right">
        <div class="flex mb-5 gap-8">
          <img :src="work.workPic" alt="schoolPhoto" class="photo-image" />
          <Container>
            <h3 class="jetbrains-mono-light color_pink mb-2">
              IT Intern at Cavite State University – Imus Campus
            </h3>
            <span
              :class="work.endDate !== 'Present' ? 'green-tag' : 'orange-tag'"
              class="jetbrains-mono-extralight p-1 rounded my-4"
            >
              {{ work.startDate }} - {{ work.endDate }}
            </span>
            <p class="mt-3 color_green">Responsibilities</p>
            <ul class="list-disc pl-5">
              <li
                class="jetbrains-mono-extralight"
                v-for="(responsibility, index) in work.responsibilities"
                :key="index"
              >
                {{ responsibility }}
              </li>
            </ul>
          </Container>
        </div>
      </div>
    </div>
    <!-- Certificates -->
    <div class="hidden-section">
      <h2 class="jetbrains-mono-regular color_green text-left w-7xl mb-4">CERTIFICATES</h2>
      <div>
        <ul class="flex gap-15 p-3 border-b" data-aos="fade-up">
          <li v-for="type in certificateTypes" :key="type.key">
            <button
              class="sub-nav-link"
              :class="{ active: typeCert === type.key }"
              @click="changeType(type.key)"
            >
              {{ type.label }}
            </button>
          </li>
        </ul>

        <div
          v-if="filteredCertificates.length > 0"
          class="h-screen fade-scroll hide-scrollbar py-8"
        >
          <div
            v-for="certificate in filteredCertificates"
            :key="certificate.id"
            class="certificate-card flex gap-10 w-7xl hidden-section mb-8"
          >
            <!-- Certificate Content -->
            <img :src="certificate.image" class="photo-image" alt="blk_std_cyberRecon&Enum" />
            <Container>
              <h3 class="jetbrains-mono-light color_pink">{{ certificate.certTitle }}</h3>
              <p class="jetbrains-mono-extralight">{{ certificate.certType }}</p>
              <p class="jetbrains-mono-extralight mb-6">{{ certificate.dateCompleted }}</p>
              <p class="color_green mb-2">Description</p>
              <p class="jetbrains-mono-extralight mb-7">{{ certificate.description }}</p>
              <BaseButton text="LINK" @click="viewCert(certificate.link)" />
            </Container>
          </div>
        </div>

        <div v-else class="flex flex-col gap-5 items-center justify-center py-20">
          <img
            src="../../../images/icons/SadEmote.png"
            alt="sadEmoji"
            width="250px"
            height="auto"
          />
          <h3 class="jetbrains-mono-light">Certificates will be added soon.</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sub-nav-link {
  color: white;
  border-bottom: 2px solid transparent;
  padding-bottom: 4px;
  transition:
    color 0.2s ease,
    border-color 0.2s ease;
}

.sub-nav-link:hover,
.sub-nav-link.active {
  color: #db00f1;
}
</style>
