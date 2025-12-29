<script setup>
import { computed } from 'vue'
import { useToast } from '@/composables/useToast'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const { showToast } = useToast()

const handleProjectClick = () => {
  showToast('Redirecting to GitHub repository...')
}

// Import all images from assets/images folder
const imageModules = import.meta.glob('@/assets/images/*', { eager: true })

const projectImage = computed(() => {
  // Extract filename from the path (e.g., '@/assets/images/QuranEcho.png' -> 'QuranEcho.png')
  const filename = props.project.image?.split('/').pop()
  const key = `/src/assets/images/${filename}`
  return imageModules[key]?.default || props.project.image
})
</script>

<template>
  <article class="project-card fade-in-section">
    <div class="project-img-wrapper">
      <img :src="projectImage" :alt="project.title" class="project-img" />
    </div>
    <div class="project-content">
      <div class="project-type">{{ project.type }}</div>
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-desc">{{ project.desc }}</p>
      <div class="project-stack">
        <span v-for="stackItem in project.stack" :key="stackItem" class="stack-tag">
          {{ stackItem }}
        </span>
      </div>
      <a
        :href="project.repoUrl"
        target="_blank"
        rel="noopener"
        class="project-link"
        @click="handleProjectClick"
      >
        <i class="fab fa-github"></i> View Repository
      </a>
    </div>
  </article>
</template>

<style scoped>
/* ...existing code... */
</style>
