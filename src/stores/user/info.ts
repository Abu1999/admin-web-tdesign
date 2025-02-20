import { defineStore } from 'pinia'

export const useUserStore = defineStore('useUserStore', {
  state: () => ({
    data: [],
    token: '',
  }),
  getters: {},
  actions: {
    setToken(token: string) {
      this.token = token
    },
  },
  persist: true,
})
