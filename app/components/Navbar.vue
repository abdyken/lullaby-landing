<template>
  <nav class="border-b border-white/[0.06] bg-[#1B1318]/55 backdrop-blur-md">
    <div class="wrap nav-in">
      <a class="brand" href="#" aria-label="Lullaby home">
        <span class="font-display text-[22px] font-medium tracking-tight text-[#F7F0E5]">Lullaby</span>
      </a>

      <div class="flex items-center gap-9 text-[15px] font-semibold max-[560px]:hidden">
        <a class="text-[#F7F0E5]/70 transition-colors hover:text-[#F7F0E5] focus-visible:text-[#F7F0E5]" href="#story">Night timeline</a>
        <a class="text-[#F7F0E5]/70 transition-colors hover:text-[#F7F0E5] focus-visible:text-[#F7F0E5]" href="#features">Night-shift kit</a>
        <a class="text-[#F7F0E5]/70 transition-colors hover:text-[#F7F0E5] focus-visible:text-[#F7F0E5]" href="#why">Why Lullaby</a>
        <a class="text-[#F7F0E5]/70 transition-colors hover:text-[#F7F0E5] focus-visible:text-[#F7F0E5]" href="#how">How it works</a>
        <a class="text-[#F7F0E5]/70 transition-colors hover:text-[#F7F0E5] focus-visible:text-[#F7F0E5]" href="#trust">Safety</a>
      </div>

      <div class="flex items-center">
        <!-- Subtle glass CTA so it doesn't compete with the Hero's glow button -->
        <a
          href="#waitlist"
          class="font-body rounded-full bg-white/[0.06] px-5 py-2.5 text-[14px] font-semibold text-[#F7F0E5] ring-1 ring-inset ring-white/15 transition-colors hover:bg-white/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC9E80]"
        >
          Join the waitlist
        </a>
      </div>
    </div>
  </nav>
</template>
