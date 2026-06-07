<template>
  <section id="waitlist" class="final">
    <div class="final-in">
      <div class="moonglow reveal"></div>
      <h2 class="reveal">Get in before we open.</h2>
      <p class="reveal">One quiet email the night Lullaby's ready. Nothing else.</p>
      <form v-if="!submitted" class="wait-form reveal" @submit.prevent="submit">
        <label class="field">
          <span>Email address</span>
          <input v-model="email" type="email" placeholder="you@example.com" autocomplete="email" required />
        </label>
        <label class="field">
          <span>Parent status</span>
          <select v-model="parentStatus" required :class="{ filled: parentStatus }">
            <option value="" disabled>Are you a parent?</option>
            <option value="parent">Parent</option>
            <option value="expecting">Expecting</option>
            <option value="not">Not a parent</option>
          </select>
        </label>
        <label class="field">
          <span>Biggest night struggle</span>
          <input v-model="nightStruggle" type="text" placeholder="Optional" autocomplete="off" />
        </label>
        <button type="submit" class="btn btn-primary">Join the waitlist <span class="arr">→</span></button>
      </form>
      <div class="final-micro reveal"><span>Private beta coming soon</span><span class="d"></span><span>Free at launch</span><span class="d"></span><span>No spam, ever</span></div>
      <div class="form-done show" v-if="submitted" role="status" aria-live="polite">You're on the list — sleep well. 🌙</div>
    </div>
  </section>
</template>

<script setup lang="ts">
const email = ref('')
const parentStatus = ref('')
const nightStruggle = ref('')
const submitted = ref(false)

const submit = () => {
  if (!email.value.trim() || !parentStatus.value) return
  submitted.value = true
}
</script>
