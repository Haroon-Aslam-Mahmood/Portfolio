<script setup>
import { useToast } from '@/composables/useToast'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const { showToast } = useToast()

const handleProjectClick = () => {
  showToast('Project link redirecting to GitHub...')
}
</script>

<template>
  <article class="project-card fade-in-section">
    <div class="project-img-wrapper">
      <img
        :src="`https://picsum.photos/seed/${project.seed}/600/400`"
        :alt="project.title"
        class="project-img"
      />
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
      <a href="#" class="project-link" @click.prevent="handleProjectClick">
        <i class="fab fa-github"></i> View Repository
      </a>
    </div>
  </article>
</template>
