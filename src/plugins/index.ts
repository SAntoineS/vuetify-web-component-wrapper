/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'

// Types
import type { App } from 'vue'


export const pluginsWrapper = {
  install(GivenVue: any) {
    const Vue = GivenVue

    Vue.use(vuetify)
  }
}

// export function registerPlugins (app: App) {
//   app.use(vuetify)
// }
