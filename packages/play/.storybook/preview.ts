import type { Preview } from '@storybook/vue3-vite'
// .storybook/preview.ts
import { setup } from '@storybook/vue3-vite'
import { LpButton } from 'lpieces-ui'

// 优雅地全局注册组件，并保持组件名
setup((app) => {
  // 保留原始组件，同时注册 kebab-case 版本
  app.component('LpButton', LpButton)
  app.component('lp-button', LpButton)
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;