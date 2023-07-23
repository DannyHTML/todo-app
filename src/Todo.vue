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

      <ul class="text-white mx-8 capitalize">
        <transition-group name="fade">
          <li
            v-for="(todo, index) in todos"
            :key="index"
            class="border-b w-full bg-gray-800 border-gray-500 text-white duration-200"
            :class="{
              active: active,
              'text-opacity-30 line-through duration-200': active[index],
            }"
          >
            <div class="relative mx-3 py-4 flex">
              <div
                class="absolute border-2 h-6 w-6 rounded-full border-white border-opacity-30 cursor-pointer duration-300"
                :class="{
                  active: active[index],
                  'bg-gradient-to-br from-blue-500 to-purple-700 border-transparent duration-300':
                    active[index],
                }"
                @click="completed(index)"
              >
                <img
                  class="absolute select-none translate-x-1/2 translate-y-1/2"
                  src="/images/icon-check.svg"
                  alt=""
                  :class="{ hidden: !active[index] }"
                />
              </div>
              <span class="ml-8">{{ todo }}</span>
              <button class="ml-auto" @click="removeTodo(index)">
                <img src="/images/icon-cross.svg" alt="Delete" />
              </button>
            </div>
          </li>
        </transition-group>

        <div
          class="flex justify-between text-white p-3 w-full rounded-b-md bg-gray-800 px-6 text-opacity-50"
        >
          <p class="">{{ remainingItems }} items left</p>
          <div class="hidden lg:flex lg:gap-3">
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>
          <button @click="RemoveAllClearTodo">Clear Completed</button>
        </div>
        <div
          class="flex justify-center gap-4 mt-4 text-white p-3 rounded-md bg-gray-800 px-6 text-opacity-50 lg:hidden"
        >
          <button @click="showAll">All</button>
          <button @click="showActive">Active</button>
          <button @click="showCompleted">Completed</button>
        </div>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const todos = ref([]);
let newTodo = ref("");
const active = ref([]);
let items = ref(0);
let totalItems = ref(0);
let selectedCount = ref(0);

const addTodo = () => {
  if (newTodo.value.trim() !== "") {
    todos.value.push(newTodo.value);
    newTodo.value = "";
    items.value++;
  }
};

const remainingItems = computed(() => {
  return items.value - selectedCount.value;
});

const removeTodo = (index) => {
  if (active.value[index]) {
    selectedCount.value--;
  }
  todos.value.splice(index, 1);
  active.value.splice(index, 1);
  items.value--;
};

const completed = (index) => {
  active.value[index] = !active.value[index];
  totalItems.value++;
  itemsTodo(index);
};

const itemsTodo = (index) => {
  if (active.value[index]) {
    selectedCount.value++;
  } else {
    selectedCount.value--;
  }
};

const RemoveAllClearTodo = () => {
  for (let i = active.value.length - 1; i >= 0; i--) {
    if (active.value[i]) {
      todos.value.splice(i, 1);
      active.value.splice(i, 1);
    }
  }
};

const showAll = () => {};

const showActive = () => {};

const showCompleted = () => {};
</script>

<style scoped></style>
