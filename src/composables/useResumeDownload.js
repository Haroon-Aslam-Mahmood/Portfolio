import { useToast } from '@/composables/useToast'

const RESUME_PATH = '/HaroonAslam_Resume.pdf'

export function useResumeDownload() {
  const { showToast } = useToast()

  const downloadResume = (event) => {
    event?.preventDefault?.()
    showToast('Resume downloading started...')
    const link = document.createElement('a')
    link.href = RESUME_PATH
    link.download = 'HaroonAslam_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return { downloadResume }
}
