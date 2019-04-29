import Vue from 'vue'
import iView from 'iview/dist/iview.min.js';
import lang from 'iview/dist/locale/en-US'
import { locale } from 'iview'

locale(lang)

Vue.use(iView, {
  transfer: true,
  size: 'large'
});

import 'iview/dist/styles/iview.css'
