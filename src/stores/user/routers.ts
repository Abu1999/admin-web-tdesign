import { defineStore } from 'pinia'

export const useUserRoutersStore = defineStore('useUserRoutersStore', {
  state: () => ({
    list: [] as any,
  }),
  getters: {
    getRouters: (state) => {
      return state.list
    },
  },
  actions: {
    setRouters(routesList: any[]) {
      this.list = routesList
    },
    delRouters() {
      this.list = []
    },
  },
  // persist: true,
})
