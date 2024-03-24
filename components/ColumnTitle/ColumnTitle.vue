<script setup lang="ts">
import type { Props } from "./ColumnTitle.types";

const props = defineProps<Props>();
</script>

<template>
  <h2
    class="title"
    :class="props.title"
  >
    {{ props.title }}
  </h2>
</template>

<style scoped lang="scss">
.title {
  font-size: 24px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  margin: 0;
  padding: 8px;
  color: #f3f4f6;

  &.on-hold {
    background-color: #f97316;
  }

  &.in-progress {
    background-color: #3b82f6;
  }

  &.needs-review {
    background-color: #eab308;
  }

  &.approved {
    background-color: #22c55e;
  }
}
</style>
