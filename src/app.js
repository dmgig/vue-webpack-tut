import * as jQuery from 'jquery';
window.$ = jQuery;
import 'bootstrap';
import 'trumbowyg/dist/trumbowyg.min.js'
$.trumbowyg.svgPath = '/node_modules/trumbowyg/dist/ui/icons.svg';
import Vue from 'vue'
import App from './App.vue'

import "bootstrap/scss/bootstrap.scss";
import 'trumbowyg/dist/ui/trumbowyg.min.css'
import '../assets/app.css'

import entries from '../data-test/o-bosch.json'

new Vue({
  el: '#app',
  render: h => h(App, {
    props: {
      name: 'O. Bo',
      entries: entries
    }
  })
})
