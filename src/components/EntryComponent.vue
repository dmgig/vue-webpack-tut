<template>
  <div>
    <div class="">
      <h4>{{ entry.date }}</h4>
      <div class="small italic text-right">
        <a :href="entry.url">
          {{ entry.url }}
        </a>
      </div>
      <div class="alert alert-light">
        {{ entry.value }}
      </div>
      <textarea data-placeholder="Go on, start editing..." class="editor form-control"></textarea>
      <div class="alert alert-light">
        hash: {{ entry.hash }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted: function () {
    $('.editor').trumbowyg({
        btns: ['strong', 'em', '|'],
        autogrow: true
    });
  },
  props: {
    entry: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="stylus" scoped>
h1
  color red
</style>
