<template>
  <div class="container">
    <div class="row mb-3 fw-bold fs-1 text-center">
      <span>404 page</span>
    </div>
    <div class=" text-center">
      <b-button
        variant="primary"
        @click="$router.push({ name: 'index' })"
      >
        Go back
      </b-button>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'start',
});
</script>
