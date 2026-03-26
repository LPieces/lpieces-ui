<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <section id="center">
    <div class="hero">
      <lp-button>Click me</lp-button>
    </div>
  </section>

  <div class="ticks"></div>
  <section id="spacer"></section>
</template>
