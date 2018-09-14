<template>
  <div>
    <h1>Hello {{ name }}!</h1>
    <div class="">
      <h4>2018-01-01</h4>
      <div class="small italic text-right">
        <a href="https://codepen.io/dmgig/pen/d422e898502d57921ca4a64307ae17b4">
          https://codepen.io/dmgig/pen/d422e898502d57921ca4a64307ae17b4
        </a>
      </div>
      <div class="alert alert-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet nibh eget elit convallis accumsan sed a eros. Vivamus malesuada faucibus magna eget tempor. Duis molestie elit et erat rutrum condimentum. Nulla ut ipsum id arcu egestas efficitur. Integer auctor massa id fermentum vulputate. Nam eget ornare mauris, vitae malesuada purus.
      </div>
      <textarea data-placeholder="Go on, start editing..." class="editor form-control">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet nibh eget elit convallis accumsan sed a eros. Vivamus malesuada faucibus magna eget tempor. Duis molestie elit et erat rutrum condimentum. Nulla ut ipsum id arcu egestas efficitur. Integer auctor massa id fermentum vulputate. Nam eget ornare mauris, vitae malesuada purus.</textarea>
      <div class="alert alert-light">
        This is a light alert—check it out!
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
