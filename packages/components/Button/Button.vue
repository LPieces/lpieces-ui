<script setup lang="ts">
import type { ButtonProps } from "./types";
import { ref } from "vue";

defineOptions({
    name: 'LpButton'
})

const props = withDefaults(defineProps<ButtonProps>(), {
    tag: "button",
    nativeType: "button",
})

const slots = defineSlots()

const _ref = ref<HTMLButtonElement>()

</script>

<template>
    <component 
        :is="tag" 
        ref="_ref" 
        :type="tag === 'button' ? nativeType : void 0"
        :disabled="disabled"
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
    >
        <slot></slot>
    </component>
</template>
<style scoped>
@import './style.css';
</style>