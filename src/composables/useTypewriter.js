import { ref, onBeforeUnmount } from 'vue'

export function useTypewriter(text, delay = 100, startDelay = 1000) {
  const displayText = ref('')
  let timer = null
  let index = 0

  const start = () => {
    timer = setTimeout(function tick() {
      if (index < text.length) {
        displayText.value += text.charAt(index)
        index++
        timer = setTimeout(tick, delay)
      }
    }, startDelay)
  }

  const stop = () => {
    clearTimeout(timer)
  }

  onBeforeUnmount(() => {
    stop()
  })

  return {
    displayText,
    start,
    stop,
  }
}
