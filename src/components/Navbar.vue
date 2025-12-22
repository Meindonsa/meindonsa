<template>
  <nav class="fixed z-2 bg-gray-900 hidden md:block w-screen">
    <div class="mx-auto max-w-7xl px-2 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex shrink-0 items-center">
            <img
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
              class="h-8 w-auto"
            />
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:block m-auto">
          <div class="flex space-x-4">
            <a
              href="#"
              aria-current="page"
              class="px-3 py-2 text-sm font-medium text-green-500 border-b-2"
            >
              Dashboard
            </a>
            <a
              href="#"
              class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            >
              Team
            </a>
            <a
              href="#"
              class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#"
              class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            >
              Calendar
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
