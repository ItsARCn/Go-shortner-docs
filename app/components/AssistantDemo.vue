<template>
  <div class="flex flex-col w-full h-96 rounded-lg overflow-hidden border border-neutral-800 bg-neutral-950/70 p-4 mt-3 select-none">
    <div class="flex-1 flex flex-col items-center justify-center p-4">
      <div class="size-11 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center mb-3 shadow-inner">
        <span class="text-xs font-bold text-primary">AI</span>
      </div>
      <p class="text-sm font-medium text-neutral-400 mb-4">Try asking a question</p>
      <div class="flex flex-wrap gap-2 justify-center max-w-xs">
        <span class="px-2.5 py-1 text-xs rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:border-primary/50 hover:text-primary cursor-pointer transition">
          How do I get started?
        </span>
        <span class="px-2.5 py-1 text-xs rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:border-primary/50 hover:text-primary cursor-pointer transition">
          What is Docus?
        </span>
        <span class="px-2.5 py-1 text-xs rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:border-primary/50 hover:text-primary cursor-pointer transition">
          How to add components?
        </span>
      </div>
    </div>

    <div class="relative mt-auto">
      <div class="flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900/90 px-3 py-2 shadow-sm">
        <input
          type="text"
          placeholder="Ask anything..."
          class="flex-1 bg-transparent text-sm text-neutral-300 outline-none placeholder:text-neutral-500"
          readonly
        >
        <div class="size-6 rounded-md bg-primary flex items-center justify-center text-neutral-950">
          <UIcon name="i-lucide-arrow-up" class="size-3.5" />
        </div>
      </div>
    </div>
  </div>
</template>
