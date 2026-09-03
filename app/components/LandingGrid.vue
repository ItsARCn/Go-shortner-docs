<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref<'preview' | 'code'>('preview')
const copied = ref(false)

const appConfigCode = `export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      secondary: 'sky',
    },
  },
  socials: {
    x: 'https://x.com/nuxt_js',
    nuxt: 'https://nuxt.com'
  }
})`

function copyCode() {
  navigator.clipboard.writeText(appConfigCode)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

<template>
  <UPageSection>
    <UPageGrid>
      <!-- Card 1: Built with Nuxt -->
      <UPageCard
        :spotlight="true"
        class="group col-span-2 lg:col-span-1"
        target="_blank"
        to="https://nuxt.com"
      >
        <template #title>
          Built with <span class="text-primary font-bold">Nuxt</span>
        </template>
        <template #description>
          Optimized by the most famous Vue framework. Docus gives you everything you need to build fast, performant, and SEO-friendly websites.
        </template>

        <FloatingNuxt />
      </UPageCard>

      <!-- Card 2: Powered by Nuxt UI -->
      <UPageCard
        :spotlight="true"
        class="col-span-2"
        target="_blank"
        to="https://ui.nuxt.com"
      >
        <template #title>
          Powered by <span class="text-primary font-bold">Nuxt UI</span>
        </template>
        <template #description>
          Beautiful out of the box, minimal by design but highly customizable. Docus leverages Nuxt UI to give you the best docs writing experience with zero boilerplate, just focus on your content.
        </template>

        <div class="mt-4 rounded-lg overflow-hidden border border-neutral-800">
          <UColorModeImage
            dark="/landing/dark/templates-ui-pro.webp"
            light="/landing/light/templates-ui-pro.webp"
            alt="Beautiful visual powered by UI"
            class="w-full h-80 object-cover"
          />
        </div>
      </UPageCard>

      <!-- Card 3: Enhanced Markdown syntax by Nuxt Content -->
      <UPageCard
        :spotlight="true"
        class="col-span-2"
      >
        <template #title>
          Enhanced Markdown syntax by <span class="text-primary font-bold">Nuxt Content</span>
        </template>
        <template #description>
          The only thing you need to take care about is writing your content. Write your pages in Markdown and extend with MDC syntax to embed Nuxt UI or custom Vue components. Structure, routing, and rendering are handled for you.
        </template>

        <!-- Tabs: Preview and Code -->
        <div class="mt-6">
          <div class="flex items-center gap-2 border-b border-neutral-800 pb-2">
            <button
              type="button"
              class="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer"
              :class="activeTab === 'preview' ? 'bg-neutral-800 text-white shadow-sm' : 'text-neutral-400 hover:text-white'"
              @click="activeTab = 'preview'"
            >
              <UIcon name="i-lucide-eye" class="size-3.5" />
              Preview
            </button>
            <button
              type="button"
              class="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer"
              :class="activeTab === 'code' ? 'bg-neutral-800 text-white shadow-sm' : 'text-neutral-400 hover:text-white'"
              @click="activeTab = 'code'"
            >
              <UIcon name="i-lucide-code" class="size-3.5" />
              Code
            </button>
          </div>

          <!-- Preview Content -->
          <div v-if="activeTab === 'preview'" class="flex flex-col gap-3 mt-4">
            <!-- Note -->
            <div class="flex items-start gap-3 p-3.5 rounded-lg border border-sky-500/20 bg-sky-500/10 text-sky-200">
              <UIcon name="i-lucide-info" class="size-5 shrink-0 text-sky-400 mt-0.5" />
              <div class="text-sm">Here's some additional information for you.</div>
            </div>

            <!-- Tip -->
            <div class="flex items-start gap-3 p-3.5 rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-200">
              <UIcon name="i-lucide-lightbulb" class="size-5 shrink-0 text-emerald-400 mt-0.5" />
              <div class="text-sm">Here's a helpful suggestion.</div>
            </div>

            <!-- Warning -->
            <div class="flex items-start gap-3 p-3.5 rounded-lg border border-amber-500/20 bg-amber-500/10 text-amber-200">
              <UIcon name="i-lucide-triangle-alert" class="size-5 shrink-0 text-amber-400 mt-0.5" />
              <div class="text-sm">Be careful with this action as it might have unexpected results.</div>
            </div>

            <!-- Caution -->
            <div class="flex items-start gap-3 p-3.5 rounded-lg border border-red-500/20 bg-red-500/10 text-red-200">
              <UIcon name="i-lucide-circle-alert" class="size-5 shrink-0 text-red-400 mt-0.5" />
              <div class="text-sm">This action cannot be undone.</div>
            </div>
          </div>

          <!-- Code Content -->
          <div v-else class="mt-4 rounded-lg bg-neutral-950 border border-neutral-800 p-4 font-mono text-xs text-neutral-300 overflow-x-auto leading-relaxed">
            <span class="text-neutral-500">::note</span><br>
            Here's some additional information for you.<br>
            <span class="text-neutral-500">::</span><br><br>
            <span class="text-neutral-500">::tip</span><br>
            Here's a helpful suggestion.<br>
            <span class="text-neutral-500">::</span><br><br>
            <span class="text-neutral-500">::warning</span><br>
            Be careful with this action as it might have unexpected results.<br>
            <span class="text-neutral-500">::</span><br><br>
            <span class="text-neutral-500">::caution</span><br>
            This action cannot be undone.<br>
            <span class="text-neutral-500">::</span>
          </div>
        </div>
      </UPageCard>

      <!-- Card 4: Built-in Assistant -->
      <UPageCard
        :spotlight="true"
        class="col-span-2 md:col-span-1"
      >
        <template #title>
          Built-in <span class="text-primary font-bold">Assistant</span>
        </template>
        <template #description>
          Let visitors ask questions about your documentation in natural language. The assistant searches your content and provides accurate answers with source citations.
        </template>

        <AssistantDemo />
      </UPageCard>

      <!-- Card 5: Nuxt Color mode -->
      <UPageCard
        :spotlight="true"
        class="col-span-2 md:col-span-1 min-h-[450px]"
      >
        <template #title>
          <span class="text-primary font-bold">Nuxt Color</span> mode
        </template>
        <template #description>
          Built-in dark mode provided, no configuration required.
        </template>

        <ColorModeSwitch />
      </UPageCard>

      <!-- Card 6: Built-in navigation and full-text search -->
      <UPageCard
        :spotlight="true"
        class="col-span-2"
      >
        <template #title>
          Built-in navigation and <span class="text-primary font-bold">full-text search</span>
        </template>
        <template #description>
          Only focus on ordering your content, Docus handles the search modal and auto-generates the side navigation for you.
        </template>

        <div class="mt-4 rounded-lg overflow-hidden border border-neutral-800">
          <UColorModeImage
            dark="/landing/dark/command-menu.png"
            light="/landing/light/command-menu.png"
            alt="Built-in navigation and full-text search"
            class="w-full h-auto rounded-lg"
          />
        </div>
      </UPageCard>

      <!-- Card 7: Edit in production with Nuxt Studio -->
      <UPageCard
        :spotlight="true"
        class="col-span-2"
      >
        <template #title>
          Edit your content in production with <span class="text-primary font-bold">Nuxt Studio</span>
        </template>
        <template #description>
          Write and manage your content visually, with zero Markdown knowledge required. Let your non technical colleagues collaborate on the documentation and integrate Vue components without code skills.
        </template>

        <BrowserFrame>
          <video
            controls
            loop
            playsinline
            class="rounded-md w-full"
            src="https://res.cloudinary.com/nuxt/video/upload/v1767647099/studio/studio-demo_eiofld.mp4"
          />
        </BrowserFrame>
      </UPageCard>

      <!-- Card 8: Nuxt Image optimization -->
      <UPageCard
        :spotlight="true"
        class="col-span-2 lg:col-span-1"
        target="_blank"
        to="https://image.nuxt.com/"
      >
        <template #title>
          <span class="text-primary font-bold">Nuxt Image</span> optimization
        </template>
        <template #description>
          Docus automatically converts Markdown images to use <code class="text-primary">&lt;NuxtImg&gt;</code>.
        </template>

        <div class="flex-1 flex items-center justify-center p-6">
          <UColorModeImage
            dark="/landing/dark/nuxt-image.svg"
            light="/landing/light/nuxt-image.svg"
            alt="Nuxt Image visual"
            class="w-[45%] lg:w-[65%] my-8"
          />
        </div>
      </UPageCard>

      <!-- Card 9: Internationalization support -->
      <UPageCard
        :spotlight="true"
        class="col-span-2 lg:col-span-1"
        to="/getting-started/installation"
      >
        <template #title>
          <span class="text-primary font-bold">Internationalization</span> support
        </template>
        <template #description>
          Built-in i18n support with automatic routing and content management. Create multi-language documentation effortlessly.
        </template>

        <div class="flex-1 flex items-center justify-center p-4">
          <UColorModeImage
            dark="/landing/dark/i18n.svg"
            light="/landing/light/i18n.svg"
            alt="Internationalization illustration"
            class="w-full my-6"
          />
        </div>
      </UPageCard>

      <!-- Card 10: AI-Ready with native MCP -->
      <UPageCard
        :spotlight="true"
        class="col-span-2"
        to="/reference/api-reference"
      >
        <template #title>
          <span class="text-primary font-bold">AI-Ready</span> with native MCP
        </template>
        <template #description>
          Built-in Model Context Protocol server connects your documentation to AI tools like Cursor, VS Code, and Claude. Automatic generation of <code class="text-primary">llms.txt</code> and <code class="text-primary">llms-full.txt</code> files for seamless LLM integration.
        </template>

        <div class="mt-4 overflow-hidden rounded-lg">
          <UColorModeImage
            dark="/landing/dark/mcp.svg"
            light="/landing/light/mcp.svg"
            alt="Native MCP server and AI-ready content illustration"
            class="w-full h-auto rounded-lg translate-y-4"
          />
        </div>
      </UPageCard>

      <!-- Card 11: Customize with Nuxt App Config -->
      <UPageCard
        :spotlight="true"
        class="col-span-2"
      >
        <template #title>
          Customize with <span class="text-primary font-bold">Nuxt App Config</span>
        </template>
        <template #description>
          Update colors, social links, header logos and component styles globally using the <code class="text-primary">app.config.ts</code>, no direct code modifications required.
        </template>

        <div class="mt-4 rounded-lg bg-neutral-950 border border-neutral-800 overflow-hidden shadow-xl">
          <div class="flex items-center justify-between px-4 py-2.5 bg-neutral-900/80 border-b border-neutral-800 text-xs text-neutral-400">
            <div class="flex items-center gap-2">
              <UIcon name="i-vscode-icons-file-type-typescript" class="size-4" />
              <span>app.config.ts</span>
            </div>
            <button
              type="button"
              class="hover:text-white transition flex items-center gap-1 cursor-pointer"
              @click="copyCode"
            >
              <UIcon :name="copied ? 'i-lucide-check' : 'i-lucide-copy'" class="size-3.5" />
              <span>{{ copied ? 'Copied' : 'Copy' }}</span>
            </button>
          </div>
          <pre class="p-4 text-xs font-mono text-emerald-400 overflow-x-auto leading-relaxed"><code>{{ appConfigCode }}</code></pre>
        </div>
      </UPageCard>

      <!-- Card 12: Ready to start? -->
      <UPageCard
        :spotlight="true"
        class="col-span-2 lg:col-span-1"
      >
        <template #title>
          <span class="text-primary font-bold">Ready</span> to start?
        </template>
        <template #description>
          Explore all the features that make Docus the perfect documentation solution.
        </template>

        <div class="flex-1 flex flex-col items-center justify-center py-8 text-center">
          <div class="flex flex-col gap-3 w-full max-w-xs">
            <UButton
              size="lg"
              to="/getting-started/installation"
              color="primary"
              block
              trailing-icon="i-lucide-arrow-right"
            >
              Read Documentation
            </UButton>
            <UButton
              size="lg"
              to="https://github.com/ItsARCn/Go-shortner"
              color="neutral"
              variant="outline"
              block
              icon="i-simple-icons-github"
              target="_blank"
            >
              View on GitHub
            </UButton>
          </div>
        </div>
      </UPageCard>
    </UPageGrid>
  </UPageSection>
</template>

