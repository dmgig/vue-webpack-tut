<template>
  <div class="container">
    <h1>Timeline: {{ timeline.title }}</h1>
    <div class="alert alert-light">
      Entries count: {{ timeline.entries.length }}
    </div>
    <div class="">
      <button v-on:click="downloadJson" class="download-json btn btn-lg btn-info" type="button">DOWNLOAD</button>
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
  },
  methods: {
    downloadJson: function() {
      var timelineString = JSON.stringify(this.timeline, null, 2);
      var blob = new Blob([timelineString], {type: 'text/json'});
      if(window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, 'xfilename.json');
      }else{
        var elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = 'xfilename.json';
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
      }
    }
  }
}
</script>
