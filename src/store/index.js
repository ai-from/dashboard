import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    linksHome: [
      {name: 'Home', url: '/'},
      {name: 'Site', url: '/site'},
      {name: 'Orders', url: '/orders'},
      {name: 'Settings', url: '/settings'}
    ],
    linksSettings: [
      {name: 'Группы пользователей', url: '/settings/groups'},
      {name: 'Пользователи', url: '/settings/users'}
    ],
    counters: {
      home: 0,
      site: 0,
      orders: 0,
      settings: 0,
      users: 0,
      groups: 0
    }
  },
  mutations: {
    UPDATE_COUNTERS(state, cnt) {
      state.counters[cnt]++
    }
  },
  actions: {
  },
  getters: {
    GET_LINKS_HOME(state) {
      return state.linksHome
    },
    GET_LINKS_SETTINGS(state) {
      return state.linksSettings
    },
    GET_COUNTERS(state) {
      return state.counters
    }
  },
  modules: {
  }
})
