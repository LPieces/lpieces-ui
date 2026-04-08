<script lang="ts" setup>
import type { ButtonGroupContext, ButtonGroupProps } from './types'
import { provide, reactive } from 'vue'
import { BUTTON_GROUP_CONTEXT_KEY } from './contants'

defineOptions({
    name: 'LpButtonGroup'
})

const props = defineProps<ButtonGroupProps>()
    
const context = reactive<ButtonGroupContext>({
    size: props.size,
    type: props.type,
    disabled: props.disabled,
})

provide(BUTTON_GROUP_CONTEXT_KEY, context)
</script>

<template>
    <div class="lp-button-group">
        <slot></slot>
    </div>
</template>

<style scoped>
@import './style.css'
</style>
