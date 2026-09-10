<template>
    <div>
        <h1>Computed Properties</h1>
        <p>Has published books:</p>
        <span>{{ publishedBooksMessage }}</span>
    </div>
</template>

<script setup>
import { reactive, computed } from 'vue';

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})

</script>

<style lang="scss" scoped>

</style>