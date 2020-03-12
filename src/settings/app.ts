import Vue from 'vue';
import _ from 'lodash';
import {Chrome} from 'vue-color';
import VueTextareaAutosize from 'vue-textarea-autosize';

import './index.scss';

import storage from '../storage';

const {changeMainColor, changeColor, changeEqualColor, highlightDictionary} = require('../client-rpc');
const {resetMessages, resetMessagesEqual, resetAll, closeSearchTabs, toogleWords, cianCommand, resetLinks} = require('../rpc.ts');

Vue.use(VueTextareaAutosize);

export default {
  components: {Chrome},
  data() {
    return {
      mainColor: storage.mainColor,
      color: storage.color,
      equalColor: storage.equalColor,
      words: storage.words,
      dictionary: storage.dictionary,
      linksList: storage.linksList
    };
  },
  watch: {
    mainColor: _.debounce((v) => {
      const c = v.hex8;
      storage.mainColor = c;
      changeMainColor(c);
    }, 500),
    equalColor: _.debounce((v) => {
      const c = v.hex8;
      storage.equalColor = c;
      changeEqualColor(c);
    }, 500),
    color: _.debounce((v) => {
      const c = v.hex8;
      storage.color = c;
      changeColor(c);
    }, 500),
    linksList: _.debounce((v) => {
      storage.linksList = v;
    }),
    dictionary: _.debounce(function (v) {
      storage.dictionary = v;
      if (this.words) {
        highlightDictionary(storage.dictionaryRe);
      }
    }, 500),
    words(v: boolean) {
      toogleWords(v);
      highlightDictionary(v ? storage.dictionaryRe : null);
    }
  },
  methods: {
    cianCommand,
    resetMessages,
    resetMessagesEqual,
    resetAll,
    resetLinks,
    closeSearchTabs,
    configureCommands() {
      chrome.tabs.create({url: 'chrome://extensions/configureCommands', active: true});
    }
  }
};
