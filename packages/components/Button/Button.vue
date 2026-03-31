<script setup lang="ts">
import type { ButtonProps, ButtonEmits, ButtonInstance } from "./types";
import { computed, ref } from "vue";
import { throttle } from 'lodash-es'
import LpIcon from '../Icon/Icon.vue'

defineOptions({
    name: 'LpButton'
})

const props = withDefaults(defineProps<ButtonProps>(), {
    tag: "button",
    nativeType: "button",
    type: 'primary',
    size: 'default',
    throttleDuration: 500,
    disabled: false,
    loading: false,
    plain: false,
    round: false,
    circle: false,
    useThrottle: false,
})

const emits = defineEmits<ButtonEmits>()

const slots = defineSlots()

const _ref = ref<HTMLButtonElement>()

// 判断是否有默认槽位，以及默认槽位是否有内容
const hasDefaultSlot = computed(() => {
  if (!slots.default) return false
  const vnodes = slots.default()
  for (const vnode of vnodes) {
    if (typeof vnode.type === 'symbol' && vnode.type.toString().includes('Comment')) {
      continue
    }
    if (typeof vnode.children === 'string' && vnode.children.trim() === '') {
      continue
    }
    return true
  }
  return false
})
const iconStyle = computed(() => ({ marginRight: hasDefaultSlot.value ? '4px' : '0' }))

const handleButtonClick = (e: MouseEvent) => emits('click', e)
const handleButtonClickThrottle = throttle(handleButtonClick, props.throttleDuration, { trailing: false })

defineExpose<ButtonInstance>({
    ref: _ref,
})
</script>

<template>
    <component 
        ref="_ref"
        :is="tag"
        :autofocus="autofocus" 
        :type="tag === 'button' ? nativeType : void 0"
        :disabled="disabled || loading ? true : void 0"
        :class="{
            'lp-button': true,
            [`lp-button--${type}`]: type,
            [`lp-button--${size}`]: size, 
            'is-plain': plain,
            'is-round': round,
            'is-circle': circle,
            'is-disabled': disabled,
            'is-loading': loading,
        }"
        @click="(e: MouseEvent) => useThrottle ? handleButtonClickThrottle(e)  : handleButtonClick(e)"
    >
        <template v-if="loading">
            <slot name="loading">
                <LpIcon class="loading-icon" :icon="loadingIcon ?? 'spinner'" :style="iconStyle" size="1x" spin />
            </slot>
        </template>
        <LpIcon v-if="icon && !loading" :style="iconStyle" size="1x" :icon="icon" />
        <slot></slot>
    </component>
</template>
<style scoped>
@import './style.css';
</style>