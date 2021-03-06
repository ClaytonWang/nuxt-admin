import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import site from './modules/site';
import menu from './modules/menu';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const createStore = () => {
  return new Vuex.Store({
    actions,
    getters,
    modules: {
      site,
      menu,
    },
    strict: debug,
  });
}

export default createStore;
