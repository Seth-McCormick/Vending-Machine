import { ProxyState } from "../AppState.js"

class SnacksService {
    transactionTotal() {



    }

    drawMoney() {

        ProxyState.money += .25

    }


    purchaseItem() {
        if (ProxyState.price >= ProxyState.money) {
            ProxyState.price -= ProxyState.money

        }

    }

}

export const snacksService = new SnacksService()