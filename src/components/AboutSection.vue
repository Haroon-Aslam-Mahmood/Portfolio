<script setup>
import { aboutParagraphs, skillCategories } from '@/data/content'
</script>

<template>
  <section id="about">
    <div class="container">
      <h2>About Me</h2>
      <div class="about-grid fade-in-section">
        <div class="about-text">
          <h3>Professional Summary</h3>
          <p v-for="(paragraph, index) in aboutParagraphs" :key="index">
            {{ paragraph }}
          </p>
        </div>

        <div class="skills-container">
          <h3>Tech Stack</h3>
          <div v-for="category in skillCategories" :key="category.title" class="skill-category">
            <span class="skill-category-title">{{ category.title }}</span>
            <div class="tags">
              <span v-for="tag in category.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
