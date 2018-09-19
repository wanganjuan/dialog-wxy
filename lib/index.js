import Alert from './alert'

export default {
  install (Vue, options) {
    Vue.prototype.$alert = Alert
  }
}
