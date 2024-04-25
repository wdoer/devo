import { defineStore } from "pinia";
import { ref, watch, onMounted, computed } from "vue";

export const useTaskStore = defineStore("taskStore", () => {
  const tasks = ref([]);
  const taskFilter = ref("");
  const tasksFromLS = JSON.parse(localStorage.getItem("tasks")) ?? [];

  // Methods

  const getTasksFromLS = () => (tasks.value = tasksFromLS);
  const getTasks = computed(() => {
    switch (taskFilter.value) {
      case "active":
        return getActiveTasks();
      case "completed":
        return getCompleteTasks();
      default:
        return tasks.value;
    }
  });
  const getTaskById = (id) => tasks.value.filter((task) => task.id == id);
  const getActiveTasks = () => tasks.value.filter((task) => !task.isCompleted);
  const getCompleteTasks = () => tasks.value.filter((task) => task.isCompleted);
  const changeTaskFilter = (type) => (taskFilter.value = type);
  const isFilterType = (type) => taskFilter.value == type;

  const addTask = (name) =>
    tasks.value.push({
      id: getRandomId(),
      name,
      createdAt: getCurrentTime(),
      isCompleted: false,
    });
  const deleteTask = (id) =>
    (tasks.value = tasks.value.filter((task) => task.id !== id));

  // Utils

  const getRandomId = () => Math.floor(Math.random() * 10000);
  const getCurrentTime = () =>
    new Date()
      .toISOString()
      .slice(2, 16)
      .replace("T", " ")
      .replaceAll("-", ".");

  // Events

  watch(
    tasks,
    (state) => localStorage.setItem("tasks", JSON.stringify(state)),
    { deep: true }
  );

  onMounted(() => getTasksFromLS());

  return {
    tasks,
    getTasks,
    getTaskById,
    getActiveTasks,
    getCompleteTasks,
    addTask,
    deleteTask,
    changeTaskFilter,
    isFilterType,
  };
});
