<script setup>
import { socialLinks } from '@/data/content'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer>
    <div class="container">
      <div class="footer-socials">
        <a
          v-for="link in socialLinks"
          :key="link.href"
          :href="link.href"
          target="_blank"
          rel="noopener"
        >
          <i :class="link.icon === 'fab fa-linkedin-in' ? 'fab fa-linkedin' : link.icon"></i>
        </a>
      </div>
      <p class="copyright">
        &copy; <span>{{ currentYear }}</span> Haroon Aslam Mahmood. All rights reserved.
      </p>
    </div>
  </footer>
</template>
