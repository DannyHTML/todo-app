<template>
  <div class="flex justify-center">
    <div class="max-w-xl">
      <div class="mx-8 pt-10 text-white">
        <h1 class="uppercase text-2xl font-bold mb-4">t o d o</h1>
      </div>
      <form>
        <div class="mx-8 min-w-min w-full">
          <div class="relative flex items-center">
            <div class="absolute ml-4 border-2 h-5 w-5 rounded-full"></div>
            <!-- <img src="/images/icon-check.svg" alt="" /> -->
            <input
              class="p-2 w-full rounded-md bg-gray-800 pl-12 text-white outline-0"
              type="text"
              name="todo"
              id="todo"
              placeholder="Create a new todo..."
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
