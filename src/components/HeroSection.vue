<script setup>
import { onMounted } from 'vue'
import { socialLinks } from '@/data/content'
import { useTypewriter } from '@/composables/useTypewriter'
import { useToast } from '@/composables/useToast'

const { displayText, start } = useTypewriter('Full Stack Developer')
const { showToast } = useToast()

const downloadResume = (event) => {
  event.preventDefault()
  showToast('Resume downloading started...')
}

onMounted(() => {
  start()
})
</script>

<template>
  <header id="home">
    <div class="container hero-content">
      <div class="profile-img-container">
        <img
          src="https://picsum.photos/seed/haroon/300/300"
          alt="Haroon Aslam Mahmood"
          class="profile-img"
        />
      </div>
      <span class="hero-greeting">Hello, I'm</span>
      <h1 class="hero-name">Haroon Aslam Mahmood</h1>
      <p class="hero-role">
        I am a <span class="typewriter">{{ displayText }}</span>
      </p>
      <p class="hero-bio">
        A Full Stack Developer based in Pakistan, specializing in building modern, scalable web
        applications using the MERN stack.
      </p>

      <div class="social-links">
        <a
          v-for="link in socialLinks"
          :key="link.href"
          :href="link.href"
          target="_blank"
          rel="noopener"
          class="social-icon"
          :aria-label="link.aria"
        >
          <i :class="link.icon"></i>
        </a>
      </div>

      <div class="cta-buttons">
        <a href="#" class="btn btn-primary" @click.prevent="downloadResume">
          <i class="fas fa-download"></i> Download Resume
        </a>
        <a href="#contact" class="btn btn-outline">Contact Me</a>
      </div>
    </div>
  </header>
</template>
