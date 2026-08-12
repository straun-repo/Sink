<script setup lang="ts">
const { title, description } = useAppConfig()
</script>

<template>
  <section
    class="
      flex flex-1 flex-col items-center justify-center bg-background px-6 py-24
      text-foreground
    "
  >
    <div class="flex max-w-xl flex-col items-center text-center">
      <img
        src="/forestgrove.svg"
        :alt="`${title} logo`"
        width="96"
        height="96"
        class="
          size-20
          md:size-24
        "
      >
      <h1
        class="
          mt-8 text-4xl font-black tracking-tight text-balance
          md:text-5xl
        "
      >
        {{ title }}
      </h1>
      <p class="mt-4 text-lg text-pretty text-muted-foreground">
        {{ description }}
      </p>
      <Button
        as-child
        size="lg"
        class="mt-10"
      >
        <NuxtLink to="/dashboard">
          <span class="text-nowrap">Open Dashboard</span>
        </NuxtLink>
      </Button>
    </div>
  </section>
</template>
