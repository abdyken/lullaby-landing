<template>
  <div>
    <Navbar />
    <Hero />
    <NightTimeline />
    <NightShiftKit />
    <PanicToCalm />
    <HowItWorks />
    <TrustPromise />
    <Waitlist />
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Lullaby — the 3AM companion for new parents',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  ]
})

let revealObserver: IntersectionObserver | undefined

onMounted(() => {
  const revealEls = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('in'))
    return
  }

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('in')
      revealObserver?.unobserve(entry.target)
    })
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })

  revealEls.forEach((el) => {
    const siblings = Array.from(el.parentElement?.children ?? []).filter((child) => child.classList.contains('reveal'))
    const index = siblings.indexOf(el)
    if (index > 0) el.style.transitionDelay = `${index * 0.12}s`
    revealObserver?.observe(el)
  })
})

onBeforeUnmount(() => revealObserver?.disconnect())
</script>
