<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>
<script setup>
import EventService from '@/services/EventService.js'
import { onMounted, ref } from 'vue'
import { defineProps } from 'vue'

const props = defineProps(['id'])

const event = ref(null)
onMounted(() => {
  EventService.getEvent(props.id)
    .then(response => {
      event.value = response.data
    })
    .catch(error => {
      console.log(error)
    })
})
</script>
