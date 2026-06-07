<template>
  <section id="how" class="sec how">
    <div class="wrap">
      <div class="sec-head center reveal">
        <span class="kicker">How it works</span>
        <h2>Three steps. Then back to sleep.</h2>
      </div>
      <div class="steps">
        <div v-for="step in steps" :key="step.number" class="step reveal">
          <div class="circle">{{ step.number }}</div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  { number: 1, title: 'Tap to log', text: 'Feed, sleep or diaper. Dim screen, the timer starts itself.' },
  { number: 2, title: 'Add your partner', text: "Same timeline for both of you. Whoever's up logs it." },
  { number: 3, title: "Ask when you're worried", text: 'Tap Ask. A calm answer, and clear red flags if it matters.' }
]
</script>
