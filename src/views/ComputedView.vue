<template>
    <div>
        <h1>Propriedades computadas</h1>
        <p>Has published books:</p>
        <br>{{ publishedBooksMessage }}</br>
        <br>{{ publishedBooksMessage }}</br>
        <br>{{ publishedBooksMessage }}</br>
        <br>{{ publishedBooksMessage }}</br>
        <br>{{ publishedBooksMessage }}</br>
        <br>{{ publishedBooksMessage }}</br>
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
  return author.books.length > 3 ? 'Yes' : 'No'
})
</script>

<style lang="scss" scoped>

</style>