<script setup>
import { ref, onMounted } from "vue";

import { useRouter, useRoute } from "vue-router";

import { useMessage } from "naive-ui";

import { useTaskStore } from "@/stores/taskStore";

import PageHeader from "@/components/PageHeader.vue";

const router = useRouter();
const route = useRoute();
const taskStore = useTaskStore();
const message = useMessage();
let taskData = ref({});

const initDeleteTask = () => {
  message.success("Task has been deleted");

  taskStore.deleteTask(taskData.value.id);

  router.push({ name: "main" });
};

onMounted(() => (taskData.value = taskStore.getTaskById(route.params.id)[0]));
</script>

<template>
  {{ taskData.value }}
  <PageHeader show-back />
  <article class="task-content__wrapper">
    <n-checkbox
      v-model:checked="taskData.isCompleted"
      class="task-content__input-is-completed"
    />
    <input
      v-model="taskData.name"
      class="task-content__input-name"
      type="text"
      placeholder="Task name"
    />
    <p class="task-content__created-date">
      Created at: {{ taskData.createdAt }}
    </p>
    <n-button
      class="task-content__input-delete"
      type="error"
      text
      @click="initDeleteTask"
    >
      Delete
    </n-button>
  </article>
</template>

<style scoped>
.task__wrapper {
  padding: 40px;
}

.header {
  margin-bottom: 56px;

  justify-content: flex-start;
}

.task-content__wrapper {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.task-content__input-is-completed {
  --n-size: 25px !important;

  margin-bottom: 10px;
}

.task-content__input-name {
  padding: 0;
  margin-bottom: 50px;

  font-size: 40px;
  font-weight: 700;

  border: 0;
  outline: 0;
}

.task-content__created-date {
  margin-bottom: 14px;

  font-weight: 700;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.2);
}

.task-content__input-delete {
  text-decoration: underline;
}
</style>
