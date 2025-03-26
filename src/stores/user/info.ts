import { defineStore } from 'pinia'

export const useUserInfoStore = defineStore('useUserInfoStore', {
  state: () => ({
    data: [],
    token: '',
    menuList: [],
  }),
  getters: {},
  actions: {
    setToken(token: string) {
      this.token = token
    },
    setMenuList(menuList: any) {
      this.menuList = menuList
    },
    delInfo() {
      this.token = ''
    },
  },
  persist: true,
})
