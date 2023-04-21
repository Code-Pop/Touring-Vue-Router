<template>
  <p>Register for the event here</p>
  <button @click="register">Register Me</button>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps(['event'])

const register = () => {
  // Call to API
  // If registered then redirect to event details
  router.push({
    name: 'EventDetails'
  })
}
</script>
