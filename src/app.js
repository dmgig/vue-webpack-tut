// js
import * as jQuery from 'jquery';
window.$ = jQuery;
import 'bootstrap';

// css
import "bootstrap/scss/bootstrap.scss";
import '../assets/app.css'

// Vue
import Vue from 'vue'
import App from './App.vue'

import VueTrumbowyg from 'vue-trumbowyg';
import 'trumbowyg/dist/ui/trumbowyg.css';
$.trumbowyg.svgPath = '/node_modules/trumbowyg/dist/ui/icons.svg';
Vue.use(VueTrumbowyg);

// data
import timeline from '../data-test/o-bosch.json'

new Vue({
  el: '#app',
  render: h => h(App, {
    props: {
      timeline: timeline
    }
  })
})
