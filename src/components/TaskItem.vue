<script setup>
import { useTaskStore } from "@/stores/taskStore";

import { Trash } from "@vicons/ionicons5";

const props = defineProps({
  taskData: {
    type: Object,
    default: () => {},
  },
});

const taskStore = useTaskStore();
</script>

<template>
  <li
    :class="{ 'todos__item--completed': taskData.isCompleted }"
    class="todos__item"
  >
    <div class="todos__item-info">
      <n-checkbox v-model:checked="taskData.isCompleted" @click.stop />
      <p>{{ taskData.name }}</p>
    </div>
    <div class="todos__item-actions">
      <n-button
        type="error"
        text
        @click.stop="taskStore.deleteTask(taskData.id)"
      >
        <n-icon size="18">
          <Trash />
        </n-icon>
      </n-button>
    </div>
  </li>
</template>

<style>
.todos__item {
  padding: 12px 17px 13px 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  cursor: pointer;
}

.todos__item-info .n-checkbox {
  --n-size: 25px !important;
}

.todos__item-info p {
  font-style: normal;
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  color: #000000;
}

.todos__item-actions {
  display: flex;
  align-items: center;
}

.todos__item-actions button {
  color: #0000004d;
}

.todos__item--completed p {
  color: #00000033;
}

.todos__item--completed .todos__item-actions button {
  color: #0000001a;
}

.todos__item-info {
  gap: 15px;

  display: flex;
  align-items: center;
}
</style>
