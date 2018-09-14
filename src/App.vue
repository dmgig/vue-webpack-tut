<template>
  <div class="container">
    <hello-component name="World" />
    <hello-component name="Test" />
  </div>
</template>
<script>
import HelloComponent from './components/HelloComponent.vue'
export default {
  components: {
    HelloComponent
  }
}
</script>
