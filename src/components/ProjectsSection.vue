<script setup>
import { projects } from '@/data/content'
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <section id="projects">
    <div class="container">
      <h2>Featured Projects</h2>
      <div class="projects-grid">
        <ProjectCard v-for="project in projects" :key="project.title" :project="project" />
      </div>
    </div>
  </section>
</template>
