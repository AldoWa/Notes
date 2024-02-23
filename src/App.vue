<script setup lang="ts">
import CreateNote from './components/CreateNote.vue'
import Search from './components/Search.vue'
import ModalNote from './components/ModalNote.vue';
</script>

<template>
  <div class="container mx-auto">
    <Search />
    <CreateNote />
    <ModalNote />
  </div>
</template>
