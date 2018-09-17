<template>
  <div>
    <div class="">
      <h4>{{ entry.date }}</h4>
      <div class="small italic text-right">
        <a :href="entry.url" target="_blank">
          {{ entry.url }}
        </a>
      </div>
      <div class="alert alert-light">
        {{ entry.value }}
      </div>
      <trumbowyg v-model="entry.display" v-on:input="saveEntry" :config="config" class="form-control" name="display"></trumbowyg>
      <div class="alert alert-light">
        hash: {{ entry.hash }}
      </div>
    </div>
    <hr />
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      config: {
        btns: ['strong', 'em', '|'],
        autogrow: true
      }
    }
  },
  props: {
    entry: {
      type: Object,
      required: true
    }
  },
  // define methods under the `methods` object
  methods: {
    saveEntry: function (event) {
      // `this` inside methods points to the Vue instance
      alert(`Data: ${this.entry.display}`)
      // `event` is the native DOM event
      if (event) {
        //alert(event.target.tagName)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
h1
  color red
hr
  width 50%
  border 1px solid #CCC
</style>
