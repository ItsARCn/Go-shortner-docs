<template>
  <div class="w-full rounded-lg border border-neutral-800 bg-neutral-900/60 p-2 overflow-hidden shadow-2xl mt-4">
    <div class="flex items-center gap-1.5 pb-2 px-1">
      <div class="size-2.5 rounded-full bg-red-500/80" />
      <div class="size-2.5 rounded-full bg-yellow-500/80" />
      <div class="size-2.5 rounded-full bg-green-500/80" />
    </div>
    <div class="rounded-md overflow-hidden bg-neutral-950">
      <slot />
    </div>
  </div>
</template>
