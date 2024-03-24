<script setup lang="ts">
import type { Props } from "./Column.types";

const props = defineProps<Props>();

const isCreateCardFormVisible = ref(false);

function handleCreateCard(text: string) {}
</script>

<template>
  <div class="column">
    <ColumnTitle :title="props.type" />

    <ul class="list">
      <li
        class="list-item"
        v-for="item in props.items"
        :key="item.id"
      >
        <Card
          class="card"
          :id="item.id"
          :text="item.text"
        />
      </li>
    </ul>

    <button
      type="button"
      class="show-form-button"
      v-if="!isCreateCardFormVisible"
      @click="isCreateCardFormVisible = true"
    >
      <img
        src="assets/icons/plus-large-svgrepo-com.svg"
        alt="иконка плюса"
        class="icon"
      />
      <span class="text">Добавить карточку</span>
    </button>

    <CreateCardForm
      v-if="isCreateCardFormVisible"
      class="form"
      @create-card="handleCreateCard"
      @close-form="isCreateCardFormVisible = false"
    />
  </div>
</template>

<style scoped>
.column {
  display: flex;
  height: fit-content;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #1f2937;

  .list {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0;
    padding: 8px;
    gap: 8px;

    .list-item {
      display: flex;
      flex-direction: column;
    }
  }

  .show-form-button {
    margin-top: 8px;
    padding: 0 8px 8px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
    background: transparent;
    border: none;
    cursor: pointer;

    .icon {
      width: 16px;
      height: 16px;
    }

    .text {
      color: #4b5563;
    }
  }

  .form {
    margin-top: 16px;
  }
}
</style>
