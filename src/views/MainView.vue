<script setup>
import { useRouter } from "vue-router";
import { useTaskStore } from "@/stores/taskStore";

import PageHeader from "@/components/PageHeader.vue";
import TaskItem from "@/components/TaskItem.vue";
import AddTodo from "@/components/AddTodo.vue";

const router = useRouter();
const taskStore = useTaskStore();

const getButtonType = (filterType) => {
  return taskStore.isFilterType(filterType) ? "success" : "default";
};
</script>

<template>
  <PageHeader show-logo />
  <n-space justify="center">
    <n-button :type="getButtonType('')" @click="taskStore.changeTaskFilter('')">
      All
    </n-button>
    <n-button
      :type="getButtonType('active')"
      @click="taskStore.changeTaskFilter('active')"
      >Active</n-button
    >
    <n-button
      :type="getButtonType('completed')"
      @click="taskStore.changeTaskFilter('completed')"
    >
      Completed
    </n-button>
  </n-space>
  <article class="todos__wrapper">
    <ul v-if="taskStore.getTasks?.length" class="todos__items">
      <TaskItem
        v-for="task in taskStore.getTasks"
        :key="task.id"
        :task-data="task"
        @click="router.push({ name: 'task', params: { id: task.id } })"
      />
    </ul>
    <template v-else>
      <n-hr></n-hr>
      <p class="todos__empty-title">Task list is empty...</p>
    </template>
  </article>
  <article class="add-todos__wrapper">
    <AddTodo />
  </article>
</template>

<script scoped>
export default {
  name: "MainView",
};
</script>

<style>
.main__wrapper {
  align-items: center;
  justify-content: center;
}

.header {
  margin-bottom: 135px;
}

.todos__wrapper {
  max-width: 360px;
  width: 100%;

  margin-bottom: auto;
}

.todos__items {
  gap: 10px;
  padding: 10px;

  max-height: calc(6 * 60px);

  display: flex;
  flex-direction: column;

  overflow-y: auto;
}

.todos__empty-title {
  text-align: center;
  color: gray;
}
</style>
