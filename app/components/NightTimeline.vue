<template>
  <section id="story" class="story">
    <div class="stars"></div>
    <div class="story-in">
      <div class="tl-head">
        <div class="moonglow reveal"></div>
        <span class="kicker reveal">A real 3AM</span>
        <h2 class="reveal">Seven minutes from wake-up to back asleep.</h2>
        <p class="reveal">No guessing. No panic. Back to bed.</p>
      </div>
      <div class="timeline">
        <div v-for="item in items" :key="item.time" class="tl-row reveal">
          <div class="tl-time">{{ item.time }}</div>
          <div class="tl-node"></div>
          <div class="tl-card"><div class="tt">{{ item.title }}</div><div class="ts">{{ item.text }}</div></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  { time: '3:17 AM', title: 'Baby wakes up', text: "You're already reaching for your phone." },
  { time: '3:18 AM', title: 'Feed logged with one hand', text: 'One tap. Left side. Timer running.' },
  { time: '3:19 AM', title: 'Partner sees the update', text: 'Same timeline, no waking them to ask.' },
  { time: '3:21 AM', title: '“Baby spit up — normal?” asked', text: 'Usually common after feeds. No red flags tonight.' },
  { time: '3:24 AM', title: 'Back to sleep', text: 'Both of you. Until the next one.' }
]
</script>
