<script setup lang="ts">
import { ref, computed } from 'vue'

// --- Interactive URL Shortener State (Card 2) ---
const inputUrl = ref('https://github.com/ItsARCn/Go-shortner')
const customSlug = ref('go-short')
const copiedShort = ref(false)
const showQr = ref(false)
const shortResult = computed(() => `https://go.arcn.online/${customSlug.value.trim() || 'xK9p2L'}`)

function copyShortUrl() {
  navigator.clipboard.writeText(shortResult.value)
  copiedShort.value = true
  setTimeout(() => {
    copiedShort.value = false
  }, 2000)
}

// --- Dual-Tier Quotas State (Card 3) ---
const quotaTab = ref<'anonymous' | 'registered' | 'renewal'>('registered')

// --- Terminal Install State (Card 7) ---
const installCommand = 'curl -fsSL https://raw.githubusercontent.com/ItsARCn/Go-shortner/main/scripts/install.sh | sudo bash'
const copiedInstall = ref(false)

function copyInstall() {
  navigator.clipboard.writeText(installCommand)
  copiedInstall.value = true
  setTimeout(() => {
    copiedInstall.value = false
  }, 2000)
}

// --- API Code Tabs State (Card 11) ---
const apiTab = ref<'curl' | 'go' | 'js'>('curl')
const copiedApi = ref(false)

const apiSnippets = {
  curl: `curl -X POST https://go.arcn.online/api/v1/links \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://example.com/very-long-url",
    "custom_slug": "launch",
    "expires_in_days": 30
  }'`,
  go: `package main

import (
    "bytes"
    "fmt"
    "net/http"
)

func main() {
    body := []byte(\`{"url":"https://example.com","custom_slug":"launch"}\`)
    req, _ := http.NewRequest("POST", "https://go.arcn.online/api/v1/links", bytes.NewBuffer(body))
    req.Header.Set("Authorization", "Bearer YOUR_API_KEY")
    req.Header.Set("Content-Type", "application/json")
    resp, _ := http.DefaultClient.Do(req)
    fmt.Println("Status:", resp.Status)
}`,
  js: `const response = await fetch('https://go.arcn.online/api/v1/links', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    url: 'https://example.com/very-long-url',
    custom_slug: 'launch',
    expires_in_days: 30
  })
});
const data = await response.json();
console.log('Short URL:', data.short_url);`,
}

function copyApiCode() {
  navigator.clipboard.writeText(apiSnippets[apiTab.value])
  copiedApi.value = true
  setTimeout(() => {
    copiedApi.value = false
  }, 2000)
}
</script> 

<template>
  <div class="pt-2 sm:pt-4">
    <UPageSection :ui="{ container: 'pt-2 sm:pt-4 pb-16 sm:pb-24 gap-8' }">
    <UPageGrid>
      <!-- ==================== CARD 1: Sub-0.5MB RAM Footprint ==================== -->
      <UPageCard
        :spotlight="true"
        class="group col-span-2 lg:col-span-1"
      >
        <template #title>
          Sub-0.5MB <span class="text-primary font-bold">RAM Footprint</span>
        </template>
        <template #description>
          Engineered in pure Go for extreme resource efficiency. Runs effortlessly on a 1 GB RAM VPS alongside other intensive production workloads.
        </template>

        <div class="mt-5 flex flex-col gap-4 p-4 rounded-xl bg-neutral-950/80 border border-neutral-800 shadow-inner">
          <!-- Live Status Indicator -->
          <div class="flex items-center justify-between text-xs">
            <div class="flex items-center gap-2">
              <span class="relative flex size-2.5">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span class="relative inline-flex rounded-full size-2.5 bg-emerald-500" />
              </span>
              <span class="text-neutral-300 font-medium font-mono">Process: Active (PID 1842)</span>
            </div>
            <span class="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono font-semibold border border-emerald-500/20">
              0.04% VPS RAM
            </span>
          </div>

          <!-- Memory Gauge -->
          <div class="space-y-1.5">
            <div class="flex justify-between text-xs font-mono">
              <span class="text-neutral-400">Memory Used</span>
              <span class="text-emerald-400 font-bold">420 KB <span class="text-neutral-500 font-normal">/ 1,024 MB</span></span>
            </div>
            <div class="w-full h-2 rounded-full bg-neutral-800 overflow-hidden">
              <div class="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full w-[2.5%]" />
            </div>
          </div>

          <!-- Quick Comparison Badges -->
          <div class="grid grid-cols-2 gap-2 pt-1 text-center font-mono text-[11px]">
            <div class="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
              <div class="text-neutral-400 text-[10px]">GO Shortener</div>
              <div class="text-emerald-400 font-bold text-xs mt-0.5">&lt; 0.5 MB</div>
            </div>
            <div class="p-2 rounded-lg bg-neutral-900 border border-neutral-800">
              <div class="text-neutral-500 text-[10px]">Node / Python</div>
              <div class="text-neutral-400 font-medium text-xs mt-0.5">80 - 150 MB</div>
            </div>
          </div>
        </div>
      </UPageCard>

      <!-- ==================== CARD 2: Interactive URL Shortener ==================== -->
      <UPageCard
        :spotlight="true"
        class="col-span-2"
      >
        <template #title>
          Instant URL Shortening & <span class="text-primary font-bold">Custom Vanity Slugs</span>
        </template>
        <template #description>
          Shorten long links instantly with cryptographically random 6-character short codes or claim custom memorable vanity slugs with real-time collision detection.
        </template>

        <div class="mt-4 p-4 sm:p-5 rounded-xl bg-neutral-950/90 border border-neutral-800 shadow-xl flex flex-col gap-4">
          <!-- Inputs -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div class="sm:col-span-2 flex flex-col gap-1.5">
              <label class="text-xs font-medium text-neutral-400">Destination URL</label>
              <div class="flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 focus-within:border-primary transition">
                <UIcon name="i-lucide-link" class="size-4 text-neutral-500 shrink-0" />
                <input
                  v-model="inputUrl"
                  type="url"
                  placeholder="https://your-long-url.com/path"
                  class="w-full bg-transparent text-xs sm:text-sm text-neutral-200 outline-none placeholder:text-neutral-600"
                >
              </div>
            </div>

            <div class="flex flex-col gap-1.5">
              <label class="text-xs font-medium text-neutral-400">Custom Slug (Optional)</label>
              <div class="flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 focus-within:border-primary transition">
                <span class="text-xs text-neutral-500 font-mono">/</span>
                <input
                  v-model="customSlug"
                  type="text"
                  placeholder="vanity-slug"
                  class="w-full bg-transparent text-xs sm:text-sm text-neutral-200 font-mono outline-none placeholder:text-neutral-600"
                >
              </div>
            </div>
          </div>

          <!-- Generated Short Link Output Box -->
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 rounded-lg bg-neutral-900/90 border border-emerald-500/25">
            <div class="flex items-center gap-2.5 min-w-0">
              <div class="size-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                <UIcon name="i-lucide-check-check" class="size-4 text-emerald-400" />
              </div>
              <div class="truncate">
                <div class="text-[11px] text-neutral-400 font-medium">Ready to share:</div>
                <div class="text-sm font-mono font-semibold text-emerald-400 truncate">{{ shortResult }}</div>
              </div>
            </div>

            <div class="flex items-center gap-2 self-end sm:self-auto shrink-0">
              <button
                type="button"
                class="px-3 py-1.5 rounded-md text-xs font-medium transition cursor-pointer flex items-center gap-1.5"
                :class="showQr ? 'bg-primary text-neutral-950 font-semibold' : 'bg-neutral-800 text-neutral-300 hover:text-white'"
                @click="showQr = !showQr"
              >
                <UIcon name="i-lucide-qr-code" class="size-3.5" />
                <span>QR Code</span>
              </button>

              <button
                type="button"
                class="px-3.5 py-1.5 rounded-md text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-neutral-950 transition cursor-pointer flex items-center gap-1.5 shadow-md shadow-emerald-950/50"
                @click="copyShortUrl"
              >
                <UIcon :name="copiedShort ? 'i-lucide-check' : 'i-lucide-copy'" class="size-3.5" />
                <span>{{ copiedShort ? 'Copied!' : 'Copy Link' }}</span>
              </button>
            </div>
          </div>

          <!-- QR Code Preview Expandable -->
          <div v-if="showQr" class="p-4 rounded-lg bg-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-center gap-4 animate-in fade-in duration-200">
            <div class="size-24 rounded-lg bg-white p-2 flex items-center justify-center shadow-lg shrink-0">
              <!-- Inline SVG QR Code representation -->
              <svg viewBox="0 0 100 100" class="size-full">
                <rect width="100" height="100" fill="white" />
                <path d="M10 10h30v30h-30z M15 15v20h20v-20z M20 20h10v10h-10z M60 10h30v30h-30z M65 15v20h20v-20z M70 20h10v10h-10z M10 60h30v30h-30z M15 65v20h20v-20z M20 70h10v10h-10z M50 15h5v5h-5z M50 25h5v15h-5z M65 60h10v5h-10z M80 60h10v10h-10z M60 75h15v5h-15z M50 65h5v25h-5z M60 85h25v5h-25z" fill="#052e16" />
              </svg>
            </div>
            <div class="text-xs text-neutral-300 space-y-1 text-center sm:text-left">
              <div class="font-semibold text-white">High-Resolution QR Code</div>
              <div class="text-neutral-400">Scannable by all mobile camera apps. Encodes {{ shortResult }} directly.</div>
              <div class="text-[11px] text-emerald-400 font-mono pt-1">SVG Vector &bull; 0 Quality Loss</div>
            </div>
          </div>
        </div>
      </UPageCard>

      <!-- ==================== CARD 3: Dual-Tier Quotas & Renewal ==================== -->
      <UPageCard
        :spotlight="true"
        class="col-span-2"
      >
        <template #title>
          Dual-Tier Quotas & <span class="text-primary font-bold">Preserved Code Renewal</span>
        </template>
        <template #description>
          Smart lifecycle architecture. Anonymous links expire in 7 days; registered accounts enjoy 100 links/month up to 1 year. Expired links return HTTP 410 and can be renewed with the exact same vanity slug!
        </template>

        <div class="mt-4">
          <!-- Tab Buttons -->
          <div class="flex items-center gap-2 border-b border-neutral-800 pb-2">
            <button
              type="button"
              class="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition cursor-pointer"
              :class="quotaTab === 'anonymous' ? 'bg-neutral-800 text-white shadow' : 'text-neutral-400 hover:text-white'"
              @click="quotaTab = 'anonymous'"
            >
              <UIcon name="i-lucide-user-x" class="size-3.5" />
              Anonymous (7 Days)
            </button>
            <button
              type="button"
              class="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition cursor-pointer"
              :class="quotaTab === 'registered' ? 'bg-neutral-800 text-white shadow' : 'text-neutral-400 hover:text-white'"
              @click="quotaTab = 'registered'"
            >
              <UIcon name="i-lucide-user-check" class="size-3.5" />
              Registered (30d - 1yr)
            </button>
            <button
              type="button"
              class="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition cursor-pointer"
              :class="quotaTab === 'renewal' ? 'bg-neutral-800 text-white shadow' : 'text-neutral-400 hover:text-white'"
              @click="quotaTab = 'renewal'"
            >
              <UIcon name="i-lucide-refresh-cw" class="size-3.5" />
              HTTP 410 Renewal Engine
            </button>
          </div>

          <!-- Tab Content: Anonymous -->
          <div v-if="quotaTab === 'anonymous'" class="mt-4 p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3">
            <div class="flex items-center justify-between text-xs">
              <span class="font-semibold text-neutral-200">Anonymous Visitor Allowance</span>
              <span class="px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 font-mono">15 Links / 24h</span>
            </div>
            <p class="text-xs text-neutral-400">
              Enforced using cryptographic SHA-256 IP hashing. No accounts or personal data stored. Maximum link duration is clamped to 7 days to keep the database lean and purge spam automatically.
            </p>
            <div class="grid grid-cols-3 gap-2 pt-1 font-mono text-[11px] text-center">
              <div class="p-2 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">Max Expiration: 7d</div>
              <div class="p-2 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">Rate Limit: Token Bucket</div>
              <div class="p-2 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">IP Hash Salted: Yes</div>
            </div>
          </div>

          <!-- Tab Content: Registered -->
          <div v-else-if="quotaTab === 'registered'" class="mt-4 p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3">
            <div class="flex items-center justify-between text-xs">
              <span class="font-semibold text-emerald-400">Authenticated Member Benefits</span>
              <span class="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono border border-emerald-500/20">100 Links / Month</span>
            </div>
            <p class="text-xs text-neutral-400">
              Users authenticate via Email &amp; Password or Google OAuth (Firebase). Enjoy extended expirations up to 1 year, permanent auto-renew justification requests, personal dashboard, and full click analytics.
            </p>
            <div class="grid grid-cols-3 gap-2 pt-1 font-mono text-[11px] text-center">
              <div class="p-2 rounded bg-neutral-900 border border-neutral-800 text-emerald-400">Max Expiration: 365d</div>
              <div class="p-2 rounded bg-neutral-900 border border-neutral-800 text-emerald-400">Custom Slugs: Enabled</div>
              <div class="p-2 rounded bg-neutral-900 border border-neutral-800 text-emerald-400">Analytics: Full Trends</div>
            </div>
          </div>

          <!-- Tab Content: Renewal -->
          <div v-else class="mt-4 p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3">
            <div class="flex items-center justify-between text-xs">
              <span class="font-semibold text-amber-400">Preserved Vanity Code Recovery</span>
              <span class="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-mono border border-amber-500/20">Zero Quota Cost</span>
            </div>
            <p class="text-xs text-neutral-400">
              When a link expires, it triggers an HTTP 410 Gone page rather than a 404. If the owner visits their dashboard, they can click &quot;Renew Link&quot; to restore it with the original custom slug without consuming a new link creation quota.
            </p>
            <div class="flex items-center justify-between p-2.5 rounded bg-neutral-900 border border-neutral-800 font-mono text-xs">
              <span class="text-neutral-400 truncate">go.arcn.online/docs-2026</span>
              <span class="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[11px] font-semibold border border-emerald-500/20">
                1-Click Renew Available
              </span>
            </div>
          </div>
        </div>
      </UPageCard>

      <!-- ==================== CARD 4: Strict SSRF & Security Shield ==================== -->
      <UPageCard
        :spotlight="true"
        class="col-span-2 md:col-span-1"
      >
        <template #title>
          Strict SSRF &amp; <span class="text-primary font-bold">Anti-Abuse Shield</span>
        </template>
        <template #description>
          Built-in defense-in-depth security. Actively prevents attackers from exploiting URL redirects to probe your private infrastructure or cloud metadata.
        </template>

        <div class="mt-4 flex flex-col gap-2 p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 font-mono text-xs">
          <div class="flex items-center justify-between p-2 rounded bg-neutral-900/90 border border-neutral-800/80">
            <span class="text-neutral-300">169.254.169.254 (Cloud Meta)</span>
            <span class="px-2 py-0.5 rounded bg-red-500/10 text-red-400 font-bold border border-red-500/20 text-[10px]">BLOCKED</span>
          </div>
          <div class="flex items-center justify-between p-2 rounded bg-neutral-900/90 border border-neutral-800/80">
            <span class="text-neutral-300">127.0.0.1 / ::1 (Loopback)</span>
            <span class="px-2 py-0.5 rounded bg-red-500/10 text-red-400 font-bold border border-red-500/20 text-[10px]">BLOCKED</span>
          </div>
          <div class="flex items-center justify-between p-2 rounded bg-neutral-900/90 border border-neutral-800/80">
            <span class="text-neutral-300">10.0.0.0/8, 192.168.0.0/16</span>
            <span class="px-2 py-0.5 rounded bg-red-500/10 text-red-400 font-bold border border-red-500/20 text-[10px]">BLOCKED</span>
          </div>
          <div class="flex items-center justify-between p-2 rounded bg-neutral-900/90 border border-neutral-800/80">
            <span class="text-neutral-300">javascript: &amp; file:// URI</span>
            <span class="px-2 py-0.5 rounded bg-red-500/10 text-red-400 font-bold border border-red-500/20 text-[10px]">BLOCKED</span>
          </div>
          <div class="flex items-center justify-between p-2 rounded bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
            <span>Cloudflare Turnstile CAPTCHA</span>
            <span class="px-2 py-0.5 rounded bg-emerald-500/20 font-bold text-[10px]">ENFORCED</span>
          </div>
        </div>
      </UPageCard>

      <!-- ==================== CARD 5: Cloudflare Tunnel ==================== -->
      <UPageCard
        :spotlight="true"
        class="col-span-2 md:col-span-1 min-h-[380px]"
      >
        <template #title>
          <span class="text-primary font-bold">Cloudflare Tunnel</span> (0 Open Ports)
        </template>
        <template #description>
          Expose GO Shortener to the public web securely without opening ports 80/443 on your firewall, dynamic DNS headaches, or public router exposure.
        </template>

        <div class="mt-5 flex-1 flex flex-col items-center justify-center p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-4">
          <!-- Flow Node 1: Local VPS -->
          <div class="w-full max-w-[260px] p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-server" class="size-4 text-neutral-400" />
              <span class="text-xs font-mono text-neutral-300">VPS Localhost:3000</span>
            </div>
            <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-400">Port 0 Open</span>
          </div>

          <!-- Connecting Arrow -->
          <div class="flex flex-col items-center gap-1 text-emerald-400">
            <UIcon name="i-lucide-arrow-down" class="size-4 animate-bounce" />
            <span class="text-[10px] font-mono text-neutral-500 tracking-wider">Encrypted cloudflared daemon</span>
          </div>

          <!-- Flow Node 2: Cloudflare Edge -->
          <div class="w-full max-w-[260px] p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-emerald-300">
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-shield-check" class="size-4 text-emerald-400" />
              <span class="text-xs font-mono font-semibold">Cloudflare Edge</span>
            </div>
            <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">DDoS Protected</span>
          </div>

          <!-- Flow Node 3: Public HTTPS -->
          <div class="w-full max-w-[260px] p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <UIcon name="i-lucide-lock" class="size-4 text-emerald-400" />
              <span class="text-xs font-mono text-neutral-200">https://go.arcn.online</span>
            </div>
            <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400">SSL A+</span>
          </div>
        </div>
      </UPageCard>

      <!-- ==================== CARD 6: Admin Moderation Center ==================== -->
      <UPageCard
        :spotlight="true"
        class="col-span-2"
      >
        <template #title>
          Real-Time <span class="text-primary font-bold">Admin Moderation Center</span>
        </template>
        <template #description>
          Empower administrators with comprehensive live stats, duration-based user timeouts (30s to 7d), permanent user bans with bulk link deactivation, and full audit logs.
        </template>

        <div class="mt-4 p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-4">
          <!-- Live Stat Badges -->
          <div class="grid grid-cols-3 gap-3 font-mono text-center">
            <div class="p-3 rounded-lg bg-neutral-900 border border-neutral-800">
              <div class="text-[11px] text-neutral-400">Total Links</div>
              <div class="text-base sm:text-lg font-bold text-white mt-0.5">18,450</div>
            </div>
            <div class="p-3 rounded-lg bg-neutral-900 border border-neutral-800">
              <div class="text-[11px] text-neutral-400">Active Users</div>
              <div class="text-base sm:text-lg font-bold text-emerald-400 mt-0.5">2,130</div>
            </div>
            <div class="p-3 rounded-lg bg-neutral-900 border border-neutral-800">
              <div class="text-[11px] text-neutral-400">Clicks Tracked</div>
              <div class="text-base sm:text-lg font-bold text-teal-400 mt-0.5">492,800</div>
            </div>
          </div>

          <!-- Moderation Table Mockup -->
          <div class="rounded-lg bg-neutral-900 border border-neutral-800 overflow-hidden text-xs">
            <div class="px-3.5 py-2.5 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between text-neutral-400 font-mono text-[11px]">
              <span>Recent Flagged User / Reports</span>
              <span class="text-emerald-400 font-semibold">Audit Stream Active</span>
            </div>

            <div class="divide-y divide-neutral-800/80">
              <div class="p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div class="flex items-center gap-2.5">
                  <div class="size-7 rounded-full bg-neutral-800 flex items-center justify-center font-mono text-xs text-neutral-300">sp</div>
                  <div>
                    <div class="font-medium text-neutral-200">spam_bot_449</div>
                    <div class="text-[11px] text-neutral-500 font-mono">Report: Phishing link (/win-prize)</div>
                  </div>
                </div>
                <div class="flex items-center gap-1.5 self-end sm:self-auto font-mono text-[11px]">
                  <span class="px-2 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">Timeout (24h)</span>
                  <span class="px-2 py-1 rounded bg-red-500/10 text-red-400 border border-red-500/20 font-semibold">Ban User</span>
                  <span class="px-2 py-1 rounded bg-neutral-800 text-neutral-300">Disable Links</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UPageCard>

      <!-- ==================== CARD 7: 1-Minute Zero-Compile Deployment ==================== -->
      <UPageCard
        :spotlight="true"
        class="col-span-2"
      >
        <template #title>
          1-Minute <span class="text-primary font-bold">Zero-Compile VPS Deployment</span>
        </template>
        <template #description>
          No Go compiler or toolchain needed on your VPS. GitHub Actions cross-compiles release binaries automatically. A single bash command installs, configures, and activates systemd.
        </template>

        <div class="mt-4 rounded-xl bg-neutral-950 border border-neutral-800 overflow-hidden shadow-xl font-mono text-xs">
          <!-- Terminal Header -->
          <div class="flex items-center justify-between px-4 py-2.5 bg-neutral-900 border-b border-neutral-800 text-neutral-400">
            <div class="flex items-center gap-1.5">
              <div class="size-2.5 rounded-full bg-red-500/80" />
              <div class="size-2.5 rounded-full bg-yellow-500/80" />
              <div class="size-2.5 rounded-full bg-green-500/80" />
              <span class="ms-2 text-xs text-neutral-400 font-medium">bash &mdash; Ubuntu 24.04 VPS</span>
            </div>
            <button
              type="button"
              class="hover:text-white transition flex items-center gap-1.5 text-xs text-neutral-400 cursor-pointer"
              @click="copyInstall"
            >
              <UIcon :name="copiedInstall ? 'i-lucide-check' : 'i-lucide-copy'" class="size-3.5" />
              <span>{{ copiedInstall ? 'Copied!' : 'Copy Script' }}</span>
            </button>
          </div>

          <!-- Terminal Content -->
          <div class="p-4 space-y-2 text-neutral-300 leading-relaxed overflow-x-auto">
            <div class="text-emerald-400 font-semibold">$ {{ installCommand }}</div>
            <div class="text-neutral-500 pt-1">[1/4] Detecting architecture... found linux/amd64</div>
            <div class="text-neutral-500">[2/4] Downloading latest release binary v1.0.0 (13.4 MB)... done.</div>
            <div class="text-neutral-500">[3/4] Initializing SQLite WAL database at /root/Go-shortner/data/go.sqlite... done.</div>
            <div class="text-neutral-500">[4/4] Registering systemd service: /etc/systemd/system/go-shortener.service... done.</div>
            <div class="text-emerald-400 pt-1 font-bold">
              [&#10003;] Service active: running on http://127.0.0.1:3000 (PID 1842)
            </div>
          </div>
        </div>
      </UPageCard>

      <!-- ==================== CARD 8: Pure Go SQLite WAL ==================== -->
      <UPageCard
        :spotlight="true"
        class="col-span-2 lg:col-span-1"
      >
        <template #title>
          Pure Go SQLite <span class="text-primary font-bold">(CGO-Free)</span>
        </template>
        <template #description>
          Backed by <code class="text-primary">modernc.org/sqlite</code> with Write-Ahead Logging (WAL) and single-writer concurrency controls to completely avoid database lock contention.
        </template>

        <div class="mt-4 p-4 rounded-xl bg-neutral-950 border border-neutral-800 font-mono text-xs space-y-2.5">
          <div class="flex items-center justify-between p-2 rounded bg-neutral-900 border border-neutral-800">
            <span class="text-neutral-300">Journal Mode</span>
            <span class="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20">WAL Mode</span>
          </div>
          <div class="flex items-center justify-between p-2 rounded bg-neutral-900 border border-neutral-800">
            <span class="text-neutral-300">CGO Dependency</span>
            <span class="px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">CGO_ENABLED=0</span>
          </div>
          <div class="flex items-center justify-between p-2 rounded bg-neutral-900 border border-neutral-800">
            <span class="text-neutral-300">Busy Timeout</span>
            <span class="px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">5,000 ms</span>
          </div>
          <div class="flex items-center justify-between p-2 rounded bg-neutral-900 border border-neutral-800">
            <span class="text-neutral-300">Backup Friendly</span>
            <span class="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">Zero Downtime</span>
          </div>
        </div>
      </UPageCard>

      <!-- ==================== CARD 9: 100% Standalone Binary ==================== -->
      <UPageCard
        :spotlight="true"
        class="col-span-2 lg:col-span-1"
      >
        <template #title>
          100% Standalone <span class="text-primary font-bold">Executable</span>
        </template>
        <template #description>
          Single self-contained ~13MB executable. The entire frontend (Vue 3, Tailwind CSS, icons) is embedded directly into the Go binary with <code class="text-primary">embed.FS</code>.
        </template>

        <div class="mt-4 p-4 rounded-xl bg-neutral-950 border border-neutral-800 font-mono text-xs space-y-2.5">
          <div class="flex items-center justify-between p-2 rounded bg-neutral-900 border border-neutral-800">
            <span class="text-neutral-300">Binary Size</span>
            <span class="text-emerald-400 font-bold">~13 MB</span>
          </div>
          <div class="flex items-center justify-between p-2 rounded bg-neutral-900 border border-neutral-800">
            <span class="text-neutral-300">Node / npm Runtime</span>
            <span class="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-semibold">Zero Required</span>
          </div>
          <div class="flex items-center justify-between p-2 rounded bg-neutral-900 border border-neutral-800">
            <span class="text-neutral-300">Docker Overhead</span>
            <span class="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-semibold">Zero Required</span>
          </div>
          <div class="flex items-center justify-between p-2 rounded bg-neutral-900 border border-neutral-800">
            <span class="text-neutral-300">Asset Serving</span>
            <span class="text-neutral-400">Go embed.FS In-Memory</span>
          </div>
        </div>
      </UPageCard>

      <!-- ==================== CARD 10: Privacy-Conscious Click Analytics ==================== -->
      <UPageCard
        :spotlight="true"
        class="col-span-2"
      >
        <template #title>
          Privacy-Conscious <span class="text-primary font-bold">Click Analytics</span>
        </template>
        <template #description>
          Gain deep visibility into click trends, device categories, top referrers, and browser distribution without logging or storing raw visitor IP addresses.
        </template>

        <div class="mt-4 p-4 sm:p-5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-4">
          <!-- Trend Graph Mockup -->
          <div class="space-y-2">
            <div class="flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>Weekly Click Velocity</span>
              <span class="text-emerald-400 font-bold">+28.4% this week</span>
            </div>
            <!-- Bar chart visualization -->
            <div class="h-28 flex items-end gap-2 sm:gap-4 pt-2 border-b border-neutral-800 pb-2">
              <div class="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                <div class="w-full bg-emerald-500/40 rounded-t h-[40%]" />
                <span class="text-[10px] text-neutral-500 font-mono">Mon</span>
              </div>
              <div class="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                <div class="w-full bg-emerald-500/50 rounded-t h-[60%]" />
                <span class="text-[10px] text-neutral-500 font-mono">Tue</span>
              </div>
              <div class="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                <div class="w-full bg-emerald-500/45 rounded-t h-[45%]" />
                <span class="text-[10px] text-neutral-500 font-mono">Wed</span>
              </div>
              <div class="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                <div class="w-full bg-emerald-500/70 rounded-t h-[75%]" />
                <span class="text-[10px] text-neutral-500 font-mono">Thu</span>
              </div>
              <div class="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                <div class="w-full bg-emerald-500/85 rounded-t h-[90%]" />
                <span class="text-[10px] text-neutral-500 font-mono">Fri</span>
              </div>
              <div class="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                <div class="w-full bg-emerald-400 rounded-t h-[100%]" />
                <span class="text-[10px] text-emerald-400 font-bold font-mono">Sat</span>
              </div>
              <div class="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                <div class="w-full bg-emerald-500/65 rounded-t h-[65%]" />
                <span class="text-[10px] text-neutral-500 font-mono">Sun</span>
              </div>
            </div>
          </div>

          <!-- Device & Referrer Breakdown -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
            <div class="p-3 rounded-lg bg-neutral-900 border border-neutral-800 space-y-1.5">
              <div class="text-neutral-400 font-medium text-[11px]">Device Categories</div>
              <div class="flex justify-between font-mono text-[11px]">
                <span class="text-neutral-300">Mobile Devices</span>
                <span class="text-emerald-400 font-bold">58%</span>
              </div>
              <div class="flex justify-between font-mono text-[11px]">
                <span class="text-neutral-300">Desktop Browsers</span>
                <span class="text-neutral-400">37%</span>
              </div>
              <div class="flex justify-between font-mono text-[11px]">
                <span class="text-neutral-300">Tablets</span>
                <span class="text-neutral-400">5%</span>
              </div>
            </div>

            <div class="p-3 rounded-lg bg-neutral-900 border border-neutral-800 space-y-1.5">
              <div class="text-neutral-400 font-medium text-[11px]">Top Traffic Referrers</div>
              <div class="flex justify-between font-mono text-[11px]">
                <span class="text-neutral-300">twitter.com (X)</span>
                <span class="text-emerald-400 font-bold">42%</span>
              </div>
              <div class="flex justify-between font-mono text-[11px]">
                <span class="text-neutral-300">linkedin.com</span>
                <span class="text-neutral-400">31%</span>
              </div>
              <div class="flex justify-between font-mono text-[11px]">
                <span class="text-neutral-300">github.com</span>
                <span class="text-neutral-400">18%</span>
              </div>
            </div>
          </div>
        </div>
      </UPageCard>

      <!-- ==================== CARD 11: Developer-First REST API ==================== -->
      <UPageCard
        :spotlight="true"
        class="col-span-2"
      >
        <template #title>
          Developer-First <span class="text-primary font-bold">REST API</span>
        </template>
        <template #description>
          Clean, predictable JSON API with Bearer token authentication for automated link creation, metric inspection, and programmatic link renewal.
        </template>

        <div class="mt-4 rounded-xl bg-neutral-950 border border-neutral-800 overflow-hidden shadow-xl font-mono text-xs">
          <!-- Language Tabs -->
          <div class="flex items-center justify-between px-4 py-2.5 bg-neutral-900 border-b border-neutral-800 text-neutral-400">
            <div class="flex items-center gap-2">
              <button
                type="button"
                class="px-2.5 py-1 rounded text-xs font-semibold transition cursor-pointer"
                :class="apiTab === 'curl' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'"
                @click="apiTab = 'curl'"
              >
                cURL
              </button>
              <button
                type="button"
                class="px-2.5 py-1 rounded text-xs font-semibold transition cursor-pointer"
                :class="apiTab === 'go' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'"
                @click="apiTab = 'go'"
              >
                Go
              </button>
              <button
                type="button"
                class="px-2.5 py-1 rounded text-xs font-semibold transition cursor-pointer"
                :class="apiTab === 'js' ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'"
                @click="apiTab = 'js'"
              >
                Node / JS
              </button>
            </div>

            <button
              type="button"
              class="hover:text-white transition flex items-center gap-1.5 text-xs text-neutral-400 cursor-pointer"
              @click="copyApiCode"
            >
              <UIcon :name="copiedApi ? 'i-lucide-check' : 'i-lucide-copy'" class="size-3.5" />
              <span>{{ copiedApi ? 'Copied!' : 'Copy Code' }}</span>
            </button>
          </div>

          <!-- Code Body -->
          <pre class="p-4 text-xs font-mono text-emerald-400 overflow-x-auto leading-relaxed"><code>{{ apiSnippets[apiTab] }}</code></pre>
        </div>
      </UPageCard>

      <!-- ==================== CARD 12: Ready to Deploy? ==================== -->
      <UPageCard
        :spotlight="true"
        class="col-span-2 lg:col-span-1"
      >
        <template #title>
          Ready to Deploy <span class="text-primary font-bold">GO Shortener?</span>
        </template>
        <template #description>
          Follow our step-by-step VPS installation guide to have your self-hosted URL shortener up and running in minutes.
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
              Read Installation Guide
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
            <NuxtLink
              to="https://go.arcn.online"
              target="_blank"
              class="text-xs text-neutral-400 hover:text-primary transition flex items-center justify-center gap-1 mt-1 font-mono"
            >
              <span>Live Instance: go.arcn.online</span>
              <UIcon name="i-lucide-external-link" class="size-3" />
            </NuxtLink>
          </div>
        </div>
      </UPageCard>
    </UPageGrid>
  </UPageSection>
  </div>
</template>
