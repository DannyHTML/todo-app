<template>
  <div class="relative z-50 flex flex-col items-center">
    <div class="w-full max-w-xl">
      <div class="mx-8 pt-10 text-white">
        <h1 class="uppercase text-2xl font-bold mb-4">t o d o</h1>
      </div>
      <div class="relative mx-8 flex items-center mb-4">
        <div
          class="absolute ml-4 border-2 h-6 w-6 rounded-full border-white border-opacity-30"
        ></div>
        <input
          class="p-2 w-full rounded-md bg-gray-800 pl-14 text-white outline-0"
          v-model="newTodo"
          @keyup.enter="addTodo"
          type="text"
          name="todo"
          id="todo"
          placeholder="Create a new todo..."
          maxlength="30"
        />
      </div>
      <ul class="text-white mx-8 capitalize">
        <li
          v-for="(todo, index) in todos"
          :key="index"
          class="border-b w-full bg-gray-800 border-gray-500 text-white"
          :class="{
            active: active,
            'text-opacity-30 line-through': active[index],
          }"
        >
          <div class="relative mx-4 py-4 pb-3 flex items-center">
            <div
              class="absolute border-2 h-6 w-6 rounded-full border-white border-opacity-30 cursor-pointer"
              :class="{
                active: active[index],
                'bg-gradient-to-br from-blue-500 to-purple-700 border-opacity-0':
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
            <span class="ml-10">{{ todo }}</span>
            <button class="ml-auto" @click="removeTodo(index)">
              <img src="/images/icon-cross.svg" alt="Delete" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const todos = ref([]);
let newTodo = ref("");
const active = ref([]);
let items = ref(0);

const addTodo = () => {
  if (newTodo.value.trim() !== "") {
    todos.value.push(newTodo.value);
    newTodo.value = "";
    items.value++;
  }
};

const removeTodo = (index) => {
  todos.value.splice(index, 1);
  active.value.splice(index, 1);
  items.value--;
  console.log(items.value);
};

const completed = (index) => {
  active.value[index] = !active.value[index];
};
</script>

<style scoped></style>
