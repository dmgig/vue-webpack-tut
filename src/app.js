import * as $ from 'jquery';
import 'bootstrap';
import Vue from 'vue'
import App from './App.vue'
import "bootstrap/scss/bootstrap.scss";
import '../assets/app.css'
new Vue({
  el: '#app',
  render: h => h(App)
})
