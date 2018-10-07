import Vue from 'vue'
import Vuex from 'vuex'
import toast from './modules/toast'
import scrolltopscore from './modules/scrolltopscore'
import currentSearchType from './modules/currentSearchType'
import login from './modules/login'
import download from './modules/download'
import shoppingCart from './modules/shoppingCart'
import help from './modules/help'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    /* 用户提示信息 */
    toast,
    /* 滚轮到顶部距离 */
    scrolltopscore,
    /* 当前搜索类型 */
    currentSearchType,
    login,
    download,
    shoppingCart,
    help
  }
})
