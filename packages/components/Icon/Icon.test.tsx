import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Icon from './Icon.vue'
import { faUser } from '@fortawesome/free-solid-svg-icons'

describe('Icon.vue', () => {
  // 基础渲染
  test('basic render', () => {
    const wrapper = mount(Icon, {
      props: {
        icon: 'user',
      },
    })
    expect(wrapper.find('i').exists()).toBe(true)
  })

  // type 类型 class
  test('render type class', () => {
    const wrapper = mount(Icon, {
      props: {
        icon: 'user',
        type: 'primary',
      },
    })
    expect(wrapper.classes()).toContain('lp-icon--primary')
  })

  // color 样式
  test('apply color style', () => {
    const wrapper = mount(Icon, {
      props: {
        icon: 'user',
        color: 'red',
      },
    })
    expect(wrapper.attributes('style')).toContain('color: red')
  })

  // 传递 FA 图标对象
  test('accept IconDefinition', () => {
    const wrapper = mount(Icon, {
      props: {
        icon: faUser,
      },
    })
    expect(wrapper.findComponent({ name: 'FontAwesomeIcon' }).exists()).toBe(true)
  })

  // 过滤 type + color 不传给 FA
  test('omit type & color for FontAwesomeIcon', () => {
    const wrapper = mount(Icon, {
      props: {
        icon: 'user',
        type: 'success',
        color: 'blue',
        size: 'lg',
        spin: true,
      },
    })

    const faIcon = wrapper.findComponent({ name: 'FontAwesomeIcon' })
    expect(faIcon.props('type')).toBeUndefined()
    expect(faIcon.props('color')).toBeUndefined()
    expect(faIcon.props('size')).toBe('lg')
    expect(faIcon.props('spin')).toBe(true)
  })
})