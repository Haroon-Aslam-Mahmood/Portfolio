import { ref } from 'vue'

const toastVisible = ref(false)
const toastMessage = ref('Notification')
let toastTimer = null

export function useToast() {
  const showToast = (message) => {
    toastMessage.value = message
    toastVisible.value = true
    clearTimeout(toastTimer)
    toastTimer = setTimeout(() => {
      toastVisible.value = false
    }, 3000)
  }

  const hideToast = () => {
    toastVisible.value = false
    clearTimeout(toastTimer)
  }

  return {
    toastVisible,
    toastMessage,
    showToast,
    hideToast,
  }
}
