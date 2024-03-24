<script setup lang="ts">
import type { Props } from "./Card.types";

const props = defineProps<Props>();
</script>

<template>
  <div class="card">
    <p class="text"><span class="accentuated">id: </span>{{ props.id }}</p>
    <p class="text content">{{ props.text }}</p>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #111827;
  padding: 16px;
  flex-grow: 1;

  .text {
    font-size: 14px;
    color: #4b5563;

    .accentuated {
      font-weight: bold;
      color: #e5e7eb;
    }

    &.content {
      flex-grow: 1;
    }
  }
}
</style>
