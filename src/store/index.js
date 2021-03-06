import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  aside: {
    dguParams: {
      title: "DGU参数",
      configs: {
        ut: { checked: true, type: 1, label: "DGU", value: "", options: {} },
        ch: { checked: true, type: 2, label: "通道ID", value: "0" },
        bolt: { checked: true, type: 2, label: "螺栓ID", value: "" },
        model: { checked: true, type: 1, label: "规格", value: "", options: {} }
      }
    },
    always: {
      title: "左侧常显配置",
      configs: {}
    }
  }, // 左侧栏参数
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store