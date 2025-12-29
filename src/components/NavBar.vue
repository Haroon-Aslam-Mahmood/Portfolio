<script setup>
import { ref } from 'vue'
import { navLinks } from '@/data/content'

const mobileMenuOpen = ref(false)

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<template>
  <nav>
    <div class="container nav-container">
      <a href="#home" class="logo">Haroon<span class="logo-suffix">.Dev</span></a>
      <div class="menu-toggle" @click="toggleMenu">
        <i :class="mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
      </div>
      <ul class="nav-links" :class="{ active: mobileMenuOpen }">
        <li v-for="link in navLinks" :key="link.href">
          <a :href="link.href" @click="closeMenu">{{ link.label }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.logo-suffix {
  color: white;
}
</style>
