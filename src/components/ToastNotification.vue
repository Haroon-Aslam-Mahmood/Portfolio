<script setup>
import { useToast } from '@/composables/useToast'

const { toastVisible, toastMessage } = useToast()
</script>

<template>
  <div class="toast" :class="{ show: toastVisible }">
    <i class="fas fa-info-circle"></i>
    <span>{{ toastMessage }}</span>
  </div>
</template>
