<template>
  <div class="container">
    <h1>Timeline: {{ timeline.title }}</h1>
    <div class="alert alert-light">
      Entries count: {{ timeline.entries.length }}
    </div>
    <hr />
    <div v-for="entry in timeline.entries">
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
    timeline: {
      type: Object
    }
  }
}
</script>
