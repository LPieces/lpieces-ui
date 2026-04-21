<script setup lang="ts">
import type { CollapseItemProps } from './types'

defineOptions({
    name: 'LpCollapseItem',
})

const props = defineProps<CollapseItemProps>()
</script>

<template>
    <div class="lp-collapse-item"></div>
</template>
