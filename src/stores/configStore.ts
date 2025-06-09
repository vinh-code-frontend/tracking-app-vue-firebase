import { defineStore } from 'pinia';

export const useConfigStore = defineStore('appConfig', {
  state: () => ({
    viewport: { width: window.innerWidth, height: window.innerHeight }
  }),
  getters: {
    isMobile: (state) => state.viewport.width < 768
  },
  actions: {
    setViewport(payload: { width: number; height: number }) {
      this.viewport = payload;
    }
  }
});
