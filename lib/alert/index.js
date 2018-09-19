import Vue from 'vue'
import alert from './alert.vue'
const AlertConstructor = Vue.extend(alert)

const instance = new AlertConstructor().$mount()

AlertConstructor.prototype.closeAlert = function () {
  const el = instance.$el
  el.parentNode && el.parentNode.removeChild(el)

  typeof this.callback === 'function' && this.callback()
}

AlertConstructor.prototype.cancelAlert = function () {
  const el = instance.$el
  el.parentNode && el.parentNode.removeChild(el)
}
const Alert = (options = {}) => {
  instance.mes = options.mes
  instance.title = options.title || '友情提醒'
  instance.button = options.button || '确定'
  instance.callback = options.callback
  instance.showpic = options.showpic
  instance.hideCancel = options.hideCancel
  document.body.appendChild(instance.$el)
}

export default Alert
