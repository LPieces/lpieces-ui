import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { LpIcon } from 'lpieces-ui'
import type { IconProps } from 'lpieces-ui'

const meta: Meta<IconProps> = {
  title: 'Components/Icon 图标',
  component: LpIcon,
  argTypes: {
    icon: {
      control: 'text',
      description: '图标名称或 FontAwesome 图标对象',
      default: 'user',
    },
    type: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger', 'info', undefined],
      description: '图标主题类型',
    },
    size: {
      control: 'select',
      options: [
        '2xs', 'xs', 'sm', 'lg', 'xl', '2xl',
        '1x', '2x', '3x', '4x', '5x', '10x',
      ],
      description: '图标尺寸',
    },
    color: {
      control: 'color',
      description: '自定义图标颜色',
    },
    spin: { control: 'boolean', description: '旋转动画' },
    pulse: { control: 'boolean', description: '脉冲旋转' },
    beat: { control: 'boolean', description: '心跳动画' },
    shake: { control: 'boolean', description: '抖动动画' },
  },
  args: {
    icon: 'user',
    size: 'lg',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LpIcon>

// 默认图标
export const Default: Story = {
  args: {},
}

// 主题类型
export const Type: Story = {
  render: () => ({
    setup() {
      const types = ['primary', 'success', 'warning', 'danger', 'info'] as const
      return { types }
    },
    components: { LpIcon },
    template: `
      <div style="display: flex; gap: 16px; font-size: 20px">
        <LpIcon v-for="t in types" :key="t" icon="user" :type="t" />
      </div>
    `,
  }),
}

// 尺寸
export const Size: Story = {
  render: () => ({
    setup() {
      const sizes = ['xs', 'sm', 'lg', 'xl', '2x', '3x'] as const
      return { sizes }
    },
    components: { LpIcon },
    template: `
      <div style="display: flex; gap: 16px; align-items: center">
        <LpIcon v-for="s in sizes" :key="s" icon="user" :size="s" />
      </div>
    `,
  }),
}

// 自定义颜色
export const Color: Story = {
  args: {
    color: '#ff4d4f',
  },
}

// 动画效果
export const Animation: Story = {
  render: () => ({
    components: { LpIcon },
    template: `
      <div style="display: flex; gap: 24px; font-size: 24px">
        <LpIcon icon="spinner" spin />
        <LpIcon icon="spinner" pulse />
        <LpIcon icon="heart" beat />
        <LpIcon icon="exclamation" shake />
      </div>
    `,
  }),
}

// 常用图标展示
export const CommonIcons: Story = {
  render: () => ({
    components: { LpIcon },
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap">
        <LpIcon icon="user" />
        <LpIcon icon="search" />
        <LpIcon icon="home" />
        <LpIcon icon="setting" />
        <LpIcon icon="arrow-up" />
        <LpIcon icon="arrow-down" />
        <LpIcon icon="check" />
        <LpIcon icon="close" />
      </div>
    `,
  }),
}