<template>
  <GithubButton
    title="Star Apinion on GitHub"
    href="https://github.com/apinion/apinion"
    :data-color-scheme="
      colorMode.value != 'light'
        ? colorMode.value == 'black'
          ? 'dark'
          : 'dark_dimmed'
        : 'light'
    "
    data-show-count="true"
    data-text="Star"
    aria-label="Star Apinion on GitHub"
    :data-size="size"
  />
</template>

<script setup lang="ts">
import GithubButton from "vue-github-button"
import { useColorMode } from "@composables/theming"

const colorMode = useColorMode()

defineProps({
  size: {
    type: String,
    default: undefined,
  },
})
</script>
