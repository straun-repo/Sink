<script setup lang="ts">
const { title } = useAppConfig()
</script>

<template>
  <div class="flex min-h-svh flex-col overflow-x-clip">
    <a
      href="#main-content"
      class="
        fixed top-4 left-4 z-50 -translate-y-24 rounded-md bg-background px-4
        py-2 text-sm font-medium shadow-lg
        focus:translate-y-0
        focus-visible:ring-2 focus-visible:ring-ring
      "
    >
      {{ $t('layouts.links.skip_to_content') }}
    </a>

    <!-- Header -->
    <header>
      <div
        class="
          fixed z-20 w-full border-b bg-background/80
          pt-[env(safe-area-inset-top)] text-foreground backdrop-blur-3xl
        "
      >
        <div class="mx-auto max-w-6xl px-6">
          <div
            class="
              flex items-center justify-between gap-6 py-3
              lg:py-4
            "
          >
            <NuxtLink
              to="/"
              :title="title"
              :aria-label="$t('layouts.links.home_aria_label')"
              class="flex items-center space-x-2"
            >
              <span class="flex size-8 items-center justify-center rounded-full">
                <img
                  src="/forestgrove.svg"
                  :alt="`${title} Logo`"
                  width="32"
                  height="32"
                  class="size-full rounded-full"
                >
              </span>
              <span class="text-xl font-black">{{ title }}</span>
            </NuxtLink>

            <SwitchTheme />
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main
      id="main-content"
      class="flex flex-1 flex-col pt-[calc(5rem+env(safe-area-inset-top))]"
    >
      <slot />
    </main>

    <!-- Footer -->
    <footer
      class="
        border-t bg-background py-6
        pb-[calc(1.5rem+env(safe-area-inset-bottom))] text-foreground
      "
    >
      <div class="mx-auto max-w-6xl px-6">
        <div
          class="
            flex flex-col items-center gap-2 text-center
            md:flex-row md:justify-between md:text-left
          "
        >
          <NuxtLink
            to="/"
            :title="title"
            :aria-label="$t('layouts.links.home_aria_label')"
            class="flex items-center space-x-2"
          >
            <span class="flex size-6 items-center justify-center rounded-full">
              <img
                src="/forestgrove.svg"
                :alt="`${title} Logo`"
                width="24"
                height="24"
                class="size-full rounded-full"
              >
            </span>
            <span class="text-sm font-black">{{ title }}</span>
          </NuxtLink>
          <span class="text-sm text-muted-foreground">© Forest Grove</span>
        </div>
      </div>
    </footer>
  </div>
</template>
