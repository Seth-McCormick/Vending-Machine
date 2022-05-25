import { Snack } from "./Models/Snack.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  money = 0
  price = snacks[1]
  snacks = [new Snack('Coke', 2.75, './assets/img/Coke.jpg'), new Snack('Pepsi', 1.50, './assets/img/Pepsi.jpg'), new Snack('Twix', 20.75, './assets/img/Twix.jpg'), new Snack('Snickers', .25, './assets/img/Snickers.jpg')]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
