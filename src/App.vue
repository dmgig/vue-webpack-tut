<template>
  <div class="container">
    <h1>{{ name }}</h1>
    <hr />
    <div v-for="entry in entries">
      <entry-component :entry="entry" />
    </div>
  </div>
</template>
<script>
import EntryComponent from './components/EntryComponent.vue'
export default {
  components: {
    EntryComponent
  },
  props: {
    name: {
      type: String,
      required: true
    },
    entries: {
      type: Array
    }
  }
}
</script>
