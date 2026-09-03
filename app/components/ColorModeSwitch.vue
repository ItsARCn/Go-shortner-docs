<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

function toggle(mode: 'dark' | 'light') {
  colorMode.preference = mode
}
</script>

<template>
  <div class="flex-1 flex flex-col items-center justify-center py-8 min-h-[320px]">
    <div class="w-32 h-64 rounded-3xl bg-neutral-900 border border-neutral-800 p-2.5 flex flex-col justify-between items-center shadow-2xl relative overflow-hidden select-none">
      <button
        type="button"
        class="w-full h-1/2 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
        :class="isDark ? 'bg-neutral-800 text-primary shadow-md border border-neutral-700/50' : 'text-neutral-500 hover:text-neutral-300'"
        aria-label="Dark mode"
        @click="toggle('dark')"
      >
        <UIcon name="i-lucide-moon" class="size-6 text-primary" />
        <span class="text-xs font-semibold tracking-wide">Dark</span>
      </button>

      <button
        type="button"
        class="w-full h-1/2 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
        :class="!isDark ? 'bg-neutral-100 text-neutral-900 shadow-md border border-white' : 'text-neutral-500 hover:text-neutral-300'"
        aria-label="Light mode"
        @click="toggle('light')"
      >
        <UIcon name="i-lucide-sun" class="size-6 text-amber-500" />
        <span class="text-xs font-semibold tracking-wide text-neutral-900">Light</span>
      </button>
    </div>
  </div>
</template>
