<template>
  <section id="trust" class="sec">
    <div class="wrap">
      <div class="trust-card reveal">
        <div class="trust-intro">
          <span class="kicker">Our promise</span>
          <h2>What Lullaby will never do.</h2>
          <p>It's not medical advice. It's a calmer first step, with trusted pediatric sources behind it.</p>
        </div>
        <div class="never-list">
          <div v-for="item in items" :key="item.title" class="never-row">
            <span class="nx"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M6 6l12 12" /></svg></span>
            <span class="nt">Never <b>{{ item.title }}</b></span>
            <span class="nd">{{ item.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  { title: 'diagnose', text: 'No labels, no guesses about your baby.' },
  { title: 'replace your doctor', text: 'For the everyday stuff, not the serious calls.' },
  { title: 'hide red flags', text: "If it's time to call someone, we say so." }
]
</script>
