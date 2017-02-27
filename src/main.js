// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource' 
import configRouter from './config'
import apiConfig from './config-api'
import tool from './libs/tool'
import App from './App'
import './script/view'
import _$ from 'jquery'

Vue._$ = _$;
Vue.apiConfig=apiConfig;
Vue.__Basepath = 'http://localhost:3066/';   //服务器
Vue.__HttpMethod ='JSONP';
Vue.__developing = false;  //是否开发中，如果否，则发布时则强制写在mock
/* eslint-disable no-new */

tool(Vue)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.http.options.emulateJSON = true;
 const router = new VueRouter({
 	routes:configRouter
 })
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})

