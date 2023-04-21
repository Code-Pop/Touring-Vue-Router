<template>
  <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
  <p>{{ event.description }}</p>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps(['event'])
</script>
