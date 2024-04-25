<script setup>
import { ref } from "vue";
import { useMessage } from "naive-ui";

import { useTaskStore } from "@/stores/taskStore";

import { AddCircle } from "@vicons/ionicons5";

const taskStore = useTaskStore();
const message = useMessage();
const taskName = ref("");

const initAddTask = () => {
  if (!taskName.value) return message.warning("Task name must be filled");

  taskStore.addTask(taskName.value);

  taskName.value = "";
};
</script>

<template>
  <div class="add-todos__box">
    <input
      v-model="taskName"
      type="text"
      placeholder="Enter your new ToDo..."
      @keydown.enter="initAddTask"
    />
    <button @click.stop="initAddTask">
      <n-icon size="25"><AddCircle /></n-icon>
    </button>
  </div>
</template>

<style>
.add-todos__wrapper {
  position: relative;

  max-width: 350px;
  width: 100%;
}

.add-todos__box input {
  padding: 17px 45px 17px 15px;

  width: 100%;

  border: unset;
  border-radius: 10px;
  background: #f0f0f0;
  outline: 0;
}

.add-todos__box input::placeholder {
  font-family: "Trebuchet MS";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.2);
}

.add-todos__box button {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 12px;

  margin: auto;
  padding: 0;

  width: 25px;
  height: 25px;

  border: 0;
  color: #00000080;
  cursor: pointer;
}
</style>
