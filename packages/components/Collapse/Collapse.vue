<script setup lang="ts">
import type { CollapseProps, CollapseEmits } from './types'

defineOptions({
    name: 'LpCollapse',
})

const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()

</script>

<template>
    <div class="lp-collapse"></div>
</template>