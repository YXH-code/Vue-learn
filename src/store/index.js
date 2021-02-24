import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    customer: {
      username: window.localStorage.getItem('customer' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('customer' || '[]')).username
    }
  },
  mutations: {
    login (state, customer) {
      state.customer = customer
      window.localStorage.setItem('customer', JSON.stringify(customer))
    }
  }
})
