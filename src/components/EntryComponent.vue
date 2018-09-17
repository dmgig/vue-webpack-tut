<template>
  <div>
    <div class="">
      <input type="text" name="date" v-model="entry.date" length="10" class="form-control form-control-lg" />
      <div class="small italic text-right">
        <a :href="entry.url" target="_blank">
          {{ entry.url }}
        </a>
      </div>
      <div class="alert alert-light">
        {{ entry.value }}
      </div>
      <trumbowyg v-model="entry.display" v-on:input="saveEntry" :config="config" class="form-control" name="display"></trumbowyg>
      <div class="entry__toolbar">
        <label for="monthOnly" class="form-control">
          Date month only: <input v-model="entry.monthOnly" name="monthOnly" type="checkbox" />
        </label>
        <label for="hide" class="form-control">
          Hide from display: <input v-model="entry.hide" name="hide" type="checkbox" />
        </label>
      </div>
      <div class="alert alert-light">
        hash: {{ entry.hash }}
      </div>
    </div>
    <hr />
  </div>
</template>
<script>
var timeout = null;
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
      if(timeout !== null) clearTimeout(timeout);
      timeout = setTimeout(() => {
        // `this` inside methods points to the Vue instance
        alert(`Data: ${this.entry.display}`)
        // `event` is the native DOM event
        if (event) {
          //alert(event.target.tagName)
        }
      }, 1000)
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
input[name=date]
  width 160px
.entry__toolbar
  display flex
  flex-align column
</style>
