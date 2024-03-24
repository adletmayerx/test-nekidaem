<script setup lang="ts">
import type { Props } from "./Card.types";

const props = defineProps<Props>();
</script>

<template>
  <div class="card">
    <p class="text"><span class="accentuated">id: </span>{{ props.id }}</p>
    <p class="text">{{ props.text }}</p>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #030712;
  padding: 8px;

  .text {
    font-size: 14px;
    color: #e5e7eb;

    .accentuated {
      font-weight: bold;
      color: #e5e7eb;
    }
  }
}
</style>
