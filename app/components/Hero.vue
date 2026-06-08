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

    <div class="relative mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-14 px-6 py-20 sm:px-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12 lg:py-28">
      <!-- Left: editorial copy -->
      <div class="max-w-xl">
        <p class="font-body flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#EC9E80]">
          <span class="inline-block h-1.5 w-1.5 rounded-full bg-[#EC9E80] shadow-[0_0_12px_2px_rgba(236,158,128,0.6)]"></span>
          For the parent awake at 3AM · 0–12 months
        </p>

        <h1 class="font-display mt-6 text-[2.6rem] font-medium leading-[1.04] tracking-tight text-[#F7F0E5] sm:text-[3.6rem]">
          One calm next step
          <span class="block">at <em class="italic text-[#EC9E80]">3AM</em>.</span>
        </h1>

        <p class="font-body mt-7 max-w-md text-lg leading-relaxed text-[#C9B8A8]">
          Log the feed, the diaper, the spit-up with one thumb in the dark.
          Ask the scary question — and get a steady answer, plus a clear nudge
          if it’s time to call the doctor.
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
            <svg viewBox="0 0 24 24" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7" /></svg>
          </span>
          <span><b class="font-semibold text-[#C9B8A8]">Early access is open</b> for first-time parents · no spam.</span>
        </div>
      </div>

      <!-- Right: a real 3:12 AM exchange — proof of product, not decoration -->
      <div class="relative">
        <div aria-hidden="true" class="absolute -inset-6 rounded-[2rem] bg-[#D9805F]/10 blur-2xl"></div>

        <div class="relative rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)] sm:p-6">
          <!-- header -->
          <div class="mb-5 flex items-center justify-between border-b border-white/[0.06] pb-4">
            <div class="flex items-center gap-2.5">
              <span class="flex h-7 w-7 items-center justify-center rounded-full bg-[#BC5F3F]/20 text-[#EC9E80]">
                <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13.6A7.5 7.5 0 1 1 10.4 4a6 6 0 0 0 9.6 9.6z" /></svg>
              </span>
              <span class="font-body text-sm font-semibold text-[#F7F0E5]/90">Lullaby</span>
            </div>
            <span class="font-body text-xs text-[#F7F0E5]/50">3:12 AM</span>
          </div>

          <!-- parent question -->
          <div class="flex justify-end">
            <p class="font-body max-w-[82%] rounded-2xl rounded-br-md bg-white/[0.07] px-4 py-3 text-[15px] leading-relaxed text-[#F7F0E5]/90">
              Baby spit up after feeding. Is this normal?
            </p>
          </div>

          <!-- Lullaby's calm answer -->
          <div class="mt-3 flex justify-start">
            <div class="max-w-[90%] rounded-2xl rounded-bl-md border border-white/[0.07] bg-gradient-to-br from-white/[0.06] to-transparent px-4 py-3.5">
              <p class="font-body text-[15px] leading-relaxed text-[#F7F0E5]/85">
                Usually common after feeds. Keep baby upright for 15–20 minutes.
              </p>

              <div class="mt-3 rounded-xl border border-[#C9A36F]/25 bg-[#C9A36F]/[0.08] p-3">
                <div class="font-body mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#D8B57E]">
                  <svg viewBox="0 0 24 24" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4" /><path d="M12 17h.01" /><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /></svg>
                  Red flags · call the doctor
                </div>
                <ul class="font-body space-y-1 text-[13px] leading-snug text-[#F7F0E5]/70">
                  <li>Forceful or projectile vomiting</li>
                  <li>Fever, or refusing to feed</li>
                  <li>Fewer wet diapers than usual</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- one-thumb log action + steady reassurance -->
          <div class="mt-4 flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
            <span class="font-body text-xs text-[#F7F0E5]/55">Nothing urgent showing right now</span>
            <span class="font-body inline-flex items-center gap-1.5 rounded-full bg-[#BC5F3F]/20 px-3 py-1.5 text-xs font-semibold text-[#EC9E80]">
              <svg viewBox="0 0 24 24" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14" /></svg>
              Log spit-up
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Smooth fade into the dark NightTimeline (#241A20) below — no harsh seam -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-b from-transparent to-[#241A20]"></div>
  </header>
</template>
