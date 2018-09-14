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
      <div class="">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet nibh eget elit convallis accumsan sed a eros. Vivamus malesuada faucibus magna eget tempor. Duis molestie elit et erat rutrum condimentum. Nulla ut ipsum id arcu egestas efficitur. Integer auctor massa id fermentum vulputate. Nam eget ornare mauris, vitae malesuada purus.
      </div>
      <textarea class="form-control">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet nibh eget elit convallis accumsan sed a eros. Vivamus malesuada faucibus magna eget tempor. Duis molestie elit et erat rutrum condimentum. Nulla ut ipsum id arcu egestas efficitur. Integer auctor massa id fermentum vulputate. Nam eget ornare mauris, vitae malesuada purus.</textarea>
      <div>
        Testing this here, a test
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
