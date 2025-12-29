<script setup>
import { contacts } from '@/data/content'
import { useResumeDownload } from '@/composables/useResumeDownload'

const { downloadResume } = useResumeDownload()
</script>

<template>
  <section id="contact">
    <div class="container contact-content fade-in-section">
      <h2>Get In Touch</h2>
      <p>
        I am currently open to new opportunities. Whether you have a question or just want to say
        hi, I'll try my best to get back to you!
      </p>

      <div class="contact-cards">
        <div v-for="contact in contacts" :key="contact.title" class="contact-card">
          <i :class="`${contact.icon} contact-icon`"></i>
          <template v-if="contact.href">
            <a :href="contact.href" target="_blank" rel="noopener" class="contact-heading-link">
              <h4>{{ contact.title }}</h4>
            </a>
          </template>
          <template v-else>
            <h4>{{ contact.title }}</h4>
          </template>
          <span>{{ contact.value }}</span>
        </div>
      </div>

      <a href="/HaroonAslam_Resume.pdf" class="btn btn-primary" @click.prevent="downloadResume">
        <i class="fas fa-download"></i> Download Resume
      </a>
    </div>
  </section>
</template>

<style scoped>
.contact-heading-link {
  text-decoration: none;
  color: inherit;
}

.contact-heading-link h4 {
  transition: color 0.3s, text-shadow 0.3s;
}

.contact-heading-link:hover h4 {
  color: var(--accent-color);
  text-shadow: 0 0 8px rgba(56, 189, 248, 0.6);
}
</style>
