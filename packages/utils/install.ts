import type { App, Plugin } from 'vue'
import { each } from 'lodash-es'

type SFCWithInstall<T> = T & Plugin

export function makeInstaller(components: Plugin[]) {
  const installer = (app: App) => each(components, c => app.use(c))

  return installer as Plugin
}

export const withInstall = <T>(components: T) => {
    (components as SFCWithInstall<T>).install = (app: App) => {
      const name = (components as any).name
      app.component(name, components as Plugin)
    }
    return components as SFCWithInstall<T>
}