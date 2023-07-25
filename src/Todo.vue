<template>
  <div class="relative z-50 flex flex-col items-center text-sm sm:text-base">
    <div class="w-full max-w-xl">
      <div class="mx-8 pt-10 text-white">
        <h1 class="uppercase text-2xl font-bold mb-4">t o d o</h1>
      </div>
      <div class="relative mx-8 flex items-center mb-4">
        <div
          class="absolute ml-3 border-2 h-6 w-6 rounded-full border-white border-opacity-30"
        ></div>
        <input
          class="p-4 w-full rounded-md bg-gray-800 pl-11 text-white outline-0"
          v-model="newTodo"
          @keyup.enter="addTodo"
          type="text"
          name="todo"
          id="todo"
          placeholder="Create a new todo..."
          maxlength="30"
          autocomplete="off"
        />
      </div>

      <ul class="text-white mx-8">
        <transition-group name="fade">
          <li
            v-for="(todo, index) in filteredTodos"
            :key="index"
            class="border-b w-full bg-gray-800 border-gray-500 text-white duration-200"
            :class="{ 'line-through text-opacity-30 italic': todo.status }"
          >
            <div class="relative mx-3 py-4 flex">
              <div
                class="absolute border-2 h-6 w-6 rounded-full border-white border-opacity-30 cursor-pointer duration-300"
                :class="{
                  'bg-gradient-to-br from-blue-500 to-purple-700 border-transparent duration-300 ':
                    todo.status,
                }"
                @click="toggleStatus(todo)"
              >
                <img
                  class="absolute select-none translate-x-1/2 translate-y-1/2"
                  src="/images/icon-check.svg"
                  alt=""
                  :class="{ hidden: !todo.status }"
                />
              </div>
              <span class="ml-8">{{ todo.text }}</span>
              <button class="ml-auto" @click="removeTodo(index)">
                <img src="/images/icon-cross.svg" alt="Delete" />
              </button>
            </div>
          </li>
        </transition-group>

        <div
          class="flex justify-between text-white p-3 w-full rounded-b-md bg-gray-800 px-6 text-opacity-50"
        >
          <p class="">{{ items }} items left</p>
          <div class="hidden lg:flex lg:gap-3">
            <button @click="setFilter('all')">All</button>
            <button @click="setFilter('active')">Active</button>
            <button @click="setFilter('completed')">Completed</button>
          </div>
          <button @click="removeAllCompletedTodo(index)">
            Clear Completed
          </button>
        </div>
        <div
          class="flex justify-center gap-4 mt-4 text-white p-3 rounded-md bg-gray-800 px-6 text-opacity-50 lg:hidden"
        >
          <button @click="setFilter('all')">All</button>
          <button @click="setFilter('active')">Active</button>
          <button @click="setFilter('completed')">Completed</button>
        </div>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const todos = ref([]);
let newTodo = ref("");
let items = ref(0);
let filter = ref("all");

const addTodo = () => {
  if (newTodo.value.trim() !== "") {
    todos.value.push({
      text: newTodo.value,
      status: false,
    });
    newTodo.value = "";
    items.value++;
  }
};

const filteredTodos = computed(() => {
  if (filter.value === "all") {
    return todos.value;
  } else if (filter.value === "active") {
    return todos.value.filter((todo) => !todo.status);
  } else if (filter.value === "completed") {
    return todos.value.filter((todo) => todo.status);
  }
});

const setFilter = (value) => {
  filter.value = value;
};

const toggleStatus = (todos) => {
  if ((todos.status = !todos.status)) {
    items.value--;
  } else items.value++;
};

const removeTodo = (index) => {
  if (!todos.value[index].status) {
    todos.value.splice(index, 1);
    items.value--;
  } else {
    todos.value.splice(index, 1);
  }
};

const removeAllCompletedTodo = () => {
  todos.value = todos.value.filter((todo) => !todo.status);
};
</script>

<style scoped></style>
