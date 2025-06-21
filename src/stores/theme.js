import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    currentTheme: 'light',
  }),
  actions: {
    applyTheme(theme) {
      if (theme === 'dark') {
        document.body.classList.add('dark')
      } else {
        document.body.classList.remove('dark')
      }
      localStorage.setItem('theme', theme)
      this.currentTheme = theme
    },

    detectPreferredTheme() {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const savedTheme = localStorage.getItem('theme')

      if (savedTheme) {
        this.applyTheme(savedTheme)
      } else if (prefersDark) {
        this.applyTheme('dark')
      } else {
        this.applyTheme('light')
      }
    },

    setTheme() {
      this.detectPreferredTheme()
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        this.applyTheme(e.matches ? 'dark' : 'light')
      })
    },

    toggleTheme() {
      const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark'
      this.applyTheme(newTheme)
    },
  },

  getters: {
    themeIcon: (state) => {
      return state.currentTheme === 'dark' ? 'dark_mode' : 'light_mode'
    },
  },
})
