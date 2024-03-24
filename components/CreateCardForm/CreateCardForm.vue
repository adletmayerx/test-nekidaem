<script setup lang="ts">
const emit = defineEmits<{ (e: "createCard", text: string): void; (e: "closeForm"): void }>();

const text = ref("");

function handleSubmit() {
  if (!text.value) {
    return;
  }

  emit("createCard", text.value);
}
</script>

<template>
  <form class="form">
    <textarea
      v-model="text"
      class="text"
      name="text"
      placeholder="Введите текст для этой карточки"
      @submit.prevent="handleSubmit"
    ></textarea>
    <div class="buttons">
      <button
        :disabled="!text"
        type="submit"
        class="submit-button"
      >
        Добавить карточку
      </button>

      <button
        type="button"
        class="close-button"
        @click="emit('closeForm')"
      >
        <img
          class="icon"
          src="assets/icons/cross-svgrepo-com.svg"
          alt="иконка крестика"
        />
      </button>
    </div>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 8px;

  .text {
    background: #333;
    color: #e5e7eb;
    min-height: 150px;
    padding: 8px;
  }

  .buttons {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;

    .submit-button {
      background: #333;
      color: #f9fafb;
      border: none;
      padding: 8px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .close-button {
      background: transparent;
      border: none;
      cursor: pointer;

      .icon {
        width: 16px;
        height: 16px;
      }
    }
  }
}
</style>
