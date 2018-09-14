<template>
  <div>
    <h1>Hello {{ name }}!</h1>
    <div class="">
      <div class="">
        <input class="form-control" type="input" name="test" />
      </div>
      <div class="">

      </div>
      <textarea class="form-control"></textarea>
      <div class="">

      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="stylus" scoped>
h1
  color red
</style>
