<template>
  <header class="header">
    <h2>{{title}}</h2>
    <n-divider />
  </header>
</template>

<script setup lang="ts">

interface IProps {
  title: string
}

defineProps<IProps>()
</script>

<style lang="scss">

</style>
