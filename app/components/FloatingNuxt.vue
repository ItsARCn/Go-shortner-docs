<template>
  <div class="flex-1 flex items-center justify-center p-6 min-h-[220px]">
    <img
      src="/landing/nuxt-logo-3D.svg"
      class="h-36 sm:h-44 floating-logo select-none"
      alt="Nuxt 3D Logo"
      draggable="false"
    >
  </div>
</template>

<style scoped>
.floating-logo {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
:deep(.group:hover) .floating-logo,
.group:hover .floating-logo {
  transform: translateY(-20px);
}
</style>
