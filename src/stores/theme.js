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

    toggleTheme() {
      const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark'
      this.applyTheme(newTheme)
    },
  },

  // Função interna para lidar com o evento de teclado
  _handleKeydown(event) {
    if (event.altKey && event.shiftKey && event.key === 't') {
      event.preventDefault() // Impede o comportamento padrão do navegador
      this.toggleTheme() // Chama a ação do próprio store
    }
  },

  // Ação para inicializar o listener do atalho
  initKeyboardShortcut() {
    // Adiciona o event listener ao window
    // Binding 'this' para garantir que a função interna acesse as ações do store corretamente
    window.addEventListener('keydown', this._handleKeydown.bind(this))
  },

  // Ação para remover o listener do atalho (importante para evitar vazamento de memória)
  destroyKeyboardShortcut() {
    // Remove o event listener
    window.removeEventListener('keydown', this._handleKeydown.bind(this))
  },

  getters: {
    // Getter para o ícone do Material Design (se o store precisar disso, mas pode ficar no componente também)
    themeIcon: (state) => {
      return state.currentTheme === 'dark' ? 'dark_mode' : 'light_mode'
    },
  },
})
