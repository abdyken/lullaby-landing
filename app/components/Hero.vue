<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

// Interactive Bento simulator: three common 3 AM scenarios the parent can
// flip between. Tiles + accent colour swap dynamically per scenario.
type ScenarioId = 'cry' | 'feed' | 'sleep'

interface Tile { label: string; value: string }
interface Scenario {
  id: ScenarioId
  time: string
  title: string
  status: string
  kind: ScenarioId          // drives the featured-tile visual flourish
  lead: string
  headline: string
  meta: string
  tiles: [Tile, Tile]
  q: string
  a: string
  // full literal class strings so Tailwind's JIT scanner picks them up
  accentText: string
  accentDot: string
  accentSoft: string
  accentBorder: string
  glow: string
}

const scenarios: Record<ScenarioId, Scenario> = {
  cry: {
    id: 'cry', time: '3:14 AM', title: 'Cry detected', status: 'Listening', kind: 'cry',
    lead: 'AI cry analysis', headline: 'Likely hunger',
    meta: 'Analyzing frequency · 89% match',
    tiles: [{ label: 'Pattern', value: 'Rhythmic' }, { label: 'Volume', value: 'Rising' }],
    q: '“What does this cry mean?”', a: 'Hunger cues detected · soothing steps ready',
    accentText: 'text-[#EC9E80]', accentDot: 'bg-[#EC9E80]', accentSoft: 'bg-[#BC5F3F]/20',
    accentBorder: 'border-[#D9805F]/25', glow: 'bg-[#D9805F]/20'
  },
  feed: {
    id: 'feed', time: '4:20 AM', title: 'Feed window', status: 'Tracking', kind: 'feed',
    lead: 'Last fed', headline: '2h 40m ago',
    meta: 'Left side · next feed in ~15 min',
    tiles: [{ label: 'Next side', value: 'Right' }, { label: 'Today', value: '6 feeds' }],
    q: '“Cluster feeding again?”', a: 'Normal at this age · tips ready',
    accentText: 'text-[#D8B57E]', accentDot: 'bg-[#C9A36F]', accentSoft: 'bg-[#C9A36F]/20',
    accentBorder: 'border-[#C9A36F]/25', glow: 'bg-[#C9A36F]/15'
  },
  sleep: {
    id: 'sleep', time: '5:45 AM', title: 'Sleep phase', status: 'Deep sleep', kind: 'sleep',
    lead: 'Asleep for', headline: '1h 12m',
    meta: 'Deep phase · breathing calm',
    tiles: [{ label: 'Total night', value: '5h 40m' }, { label: 'Wake-ups', value: '2 · brief' }],
    q: '“Is this enough sleep?”', a: 'On track for 4 months · view log',
    accentText: 'text-[#9DBE95]', accentDot: 'bg-[#7E9A77]', accentSoft: 'bg-[#7E9A77]/20',
    accentBorder: 'border-[#7E9A77]/25', glow: 'bg-[#7E9A77]/15'
  }
}

const order: ScenarioId[] = ['cry', 'feed', 'sleep']
const currentScenario = ref<ScenarioId>('cry')
const s = computed(() => scenarios[currentScenario.value])

// soft audio waveform bar heights (%) for the cry scenario
const waveform = [38, 64, 30, 88, 52, 74, 34, 82, 46, 68, 40]

let timer: ReturnType<typeof setInterval> | undefined
let paused = false

function select(id: ScenarioId) {
  currentScenario.value = id
}
function pause() { paused = true }
function resume() { paused = false }

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  timer = setInterval(() => {
    if (paused) return
    const i = order.indexOf(currentScenario.value)
    currentScenario.value = order[(i + 1) % order.length]!
  }, 4200)
})
onBeforeUnmount(() => { if (timer) clearInterval(timer) })
</script>

<template>
  <header class="relative overflow-hidden bg-[#1B1318]">
    <!-- 3 AM ambient glow: soft, blurred light sources -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-0">
      <div class="absolute -top-32 right-[-8%] h-[42rem] w-[42rem] rounded-full bg-[#D9805F]/10 blur-3xl"></div>
      <div class="absolute top-1/3 -left-32 h-[34rem] w-[34rem] rounded-full bg-[#C9A36F]/[0.06] blur-3xl"></div>
      <div class="absolute bottom-[-20%] left-1/3 h-[30rem] w-[30rem] rounded-full bg-[#7E9A77]/[0.05] blur-3xl"></div>
      <!-- faint top vignette so the nav blends into the night -->
      <div class="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent"></div>
    </div>

    <div class="relative mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-16 px-6 py-24 sm:px-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12 lg:py-32">
      <!-- Left: copy -->
      <div class="max-w-xl">
        <p class="font-body flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#EC9E80]">
          <span class="inline-block h-1.5 w-1.5 rounded-full bg-[#EC9E80] shadow-[0_0_12px_2px_rgba(236,158,128,0.6)]"></span>
          For the 3 AM shift · 0–12 months
        </p>

        <h1 class="font-display mt-6 text-[2.85rem] font-medium leading-[1.04] tracking-tight text-[#F7F0E5] sm:text-6xl">
          A calm voice when the
          <em class="italic text-[#EC9E80]">whole house</em>
          is asleep.
        </h1>

        <p class="font-body mt-7 max-w-md text-lg leading-relaxed text-[#C9B8A8]">
          Lullaby sits with you through the night feeds — log with one thumb in
          the dark, and when “is this normal?” hits at 3 AM, get one calm next
          step. No judgment, always awake when you are.
        </p>

        <div class="mt-10 flex flex-wrap items-center gap-4">
          <!-- Glow button -->
          <a
            href="#waitlist"
            class="group font-body inline-flex items-center gap-2.5 rounded-full bg-[#BC5F3F] px-7 py-4 font-bold text-white shadow-[0_8px_24px_-6px_rgba(217,128,95,0.55),0_0_60px_-12px_rgba(217,128,95,0.5)] ring-1 ring-inset ring-white/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#C96A48] hover:shadow-[0_12px_34px_-6px_rgba(217,128,95,0.7),0_0_80px_-10px_rgba(217,128,95,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC9E80]"
          >
            Join the waitlist
            <span class="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>

          <a
            href="#how"
            class="font-body inline-flex items-center rounded-full px-6 py-4 font-semibold text-[#F7F0E5]/80 ring-1 ring-inset ring-white/10 transition-colors duration-200 hover:bg-white/5 hover:text-[#F7F0E5]"
          >
            See how it works
          </a>
        </div>

        <div class="font-body mt-9 flex items-center gap-3 text-sm text-[#9A8B7D]">
          <span class="flex h-6 w-6 items-center justify-center rounded-full bg-[#7E9A77]/20 text-[#9DBE95]">
            <svg viewBox="0 0 24 24" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7" /></svg>
          </span>
          <span><b class="font-semibold text-[#C9B8A8]">Early access is open</b> for first-time parents · no spam.</span>
        </div>
      </div>

      <!-- Right: interactive Bento simulator -->
      <div class="relative" @mouseenter="pause" @mouseleave="resume" @focusin="pause" @focusout="resume">
        <!-- accent glow that morphs colour with the active scenario -->
        <div aria-hidden="true" :class="['absolute -inset-6 rounded-[2rem] blur-2xl transition-colors duration-700', s.glow]"></div>

        <div class="relative rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]">
          <!-- device header -->
          <div class="mb-4 flex items-center justify-between px-1">
            <div class="font-body text-sm font-semibold text-[#F7F0E5]/90">Baby Noah</div>
            <div class="font-body flex items-center gap-1.5 text-xs text-[#F7F0E5]/60">
              <span :class="['inline-block h-1.5 w-1.5 rounded-full transition-colors duration-500', s.accentDot]"></span>
              {{ s.status }} · {{ s.time }}
            </div>
          </div>

          <!-- scenario tabs -->
          <div role="tablist" aria-label="App scenarios" class="mb-3 grid grid-cols-3 gap-2">
            <button
              v-for="sc in scenarios"
              :key="sc.id"
              role="tab"
              type="button"
              :aria-selected="sc.id === currentScenario"
              @click="select(sc.id)"
              :class="[
                'rounded-xl px-4 py-3 text-left ring-1 ring-inset transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC9E80]',
                sc.id === currentScenario
                  ? [sc.accentSoft, 'ring-white/10']
                  : 'bg-white/[0.02] ring-white/[0.06] hover:bg-white/[0.05]'
              ]"
            >
              <span
                class="font-body block text-[10px] font-semibold uppercase tracking-wider"
                :class="sc.id === currentScenario ? sc.accentText : 'text-[#F7F0E5]/60'"
              >{{ sc.time }}</span>
              <span
                class="font-body block text-[12px] font-semibold"
                :class="sc.id === currentScenario ? 'text-[#F7F0E5]' : 'text-[#F7F0E5]/60'"
              >{{ sc.title }}</span>
            </button>
          </div>

          <!-- dynamic bento content -->
          <Transition
            mode="out-in"
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div :key="currentScenario" class="space-y-3">
              <!-- featured tile -->
              <div class="rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.06] to-transparent p-5">
                <div class="flex items-center justify-between">
                  <span :class="['font-body inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold', s.accentSoft, s.accentText]">
                    <!-- unified icon family: consistent stroke-width 1.5 -->
                    <svg viewBox="0 0 24 24" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <template v-if="s.kind === 'cry'">
                        <rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0" /><path d="M12 18v3" />
                      </template>
                      <template v-else-if="s.kind === 'feed'">
                        <circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" />
                      </template>
                      <template v-else>
                        <path d="M20 13.6A7.5 7.5 0 1 1 10.4 4a6 6 0 0 0 9.6 9.6z" />
                      </template>
                    </svg>
                    {{ s.status }}
                  </span>
                  <span class="font-body text-[10px] font-semibold uppercase tracking-wider text-[#F7F0E5]/60">Lullaby AI</span>
                </div>

                <!-- kind-specific flourish -->
                <div class="mt-4 mb-1">
                  <!-- cry: soft pulsing waveform -->
                  <div v-if="s.kind === 'cry'" class="flex h-9 items-end gap-[3px]">
                    <span
                      v-for="(h, i) in waveform"
                      :key="i"
                      class="wave-bar w-[3px] rounded-full bg-[#EC9E80]/70"
                      :style="{ height: h + '%', animationDelay: i * 90 + 'ms' }"
                    ></span>
                  </div>

                  <!-- feed: progress toward next feed window -->
                  <div v-else-if="s.kind === 'feed'" class="h-9 flex flex-col justify-center">
                    <div class="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                      <div class="h-full rounded-full bg-[#C9A36F]" style="width: 78%"></div>
                    </div>
                    <div class="font-body mt-2 flex justify-between text-[10px] text-[#F7F0E5]/60">
                      <span>Last feed</span><span>Next window</span>
                    </div>
                  </div>

                  <!-- sleep: gentle breathing pulse -->
                  <div v-else class="flex h-9 items-center gap-2.5">
                    <span class="relative flex h-3 w-3">
                      <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7E9A77]/60"></span>
                      <span class="relative inline-flex h-3 w-3 rounded-full bg-[#7E9A77]"></span>
                    </span>
                    <span class="font-body text-xs text-[#F7F0E5]/60">Breathing steady · 38 bpm</span>
                  </div>
                </div>

                <div class="font-body text-xs uppercase tracking-wider text-[#F7F0E5]/60">{{ s.lead }}</div>
                <div class="font-display mt-1 text-3xl font-medium text-[#F7F0E5]">{{ s.headline }}</div>
                <div :class="['font-body mt-1 text-xs', s.accentText]">{{ s.meta }}</div>
              </div>

              <!-- supporting tiles -->
              <div class="grid grid-cols-2 gap-3">
                <div
                  v-for="t in s.tiles"
                  :key="t.label"
                  class="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4"
                >
                  <div class="font-body text-xs uppercase tracking-wider text-[#F7F0E5]/60">{{ t.label }}</div>
                  <div class="font-body mt-1 text-base font-semibold text-[#F7F0E5]/90">{{ t.value }}</div>
                </div>
              </div>

              <!-- reassurance row -->
              <div :class="['flex items-center justify-between rounded-2xl border bg-white/[0.02] px-4 py-3.5', s.accentBorder]">
                <div>
                  <div class="font-display text-sm italic text-[#F7F0E5]/90">{{ s.q }}</div>
                  <div class="font-body text-xs text-[#F7F0E5]/60">{{ s.a }}</div>
                </div>
                <span :class="s.accentText">→</span>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>

    <!-- Smooth fade into the dark NightTimeline (#241A20) below — no harsh seam -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-b from-transparent to-[#241A20]"></div>
  </header>
</template>

<style scoped>
@keyframes wave {
  0%, 100% { transform: scaleY(0.35); }
  50%      { transform: scaleY(1); }
}
.wave-bar {
  transform-origin: bottom;
  animation: wave 1s ease-in-out infinite;
}
@media (prefers-reduced-motion: reduce) {
  .wave-bar { animation: none; }
}
</style>
