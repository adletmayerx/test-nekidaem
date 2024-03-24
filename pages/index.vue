<script setup lang="ts">
import type { ColumnType } from "~/components/ColumnTitle/ColumnTitle.types";

const items = [
  { id: "1", text: "1" },
  { id: "2", text: "2" },
  { id: "3", text: "3" },
  { id: "4", text: "4" },
];
const items2 = [
  { id: "1", text: "1" },
  { id: "2", text: "2" },
];

const columns: Array<{ type: ColumnType; items: any[] }> = [
  { type: "on-hold", items: items2 },
  { type: "in-progress", items },
  { type: "needs-review", items: items2 },
  { type: "approved", items },
];
</script>

<template>
  <div class="board">
    <div class="columns">
      <Column
        v-for="c in columns"
        :type="c.type"
        :items="c.items"
        :key="c.type"
      />
    </div>
  </div>
</template>

<style lang="scss">
.board {
  background-color: #6b7280;
  min-height: 100vh;

  .columns {
    padding: 32px 16px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 16px;
  }
}
</style>
