import { ProxyState } from "../AppState.js";
import { snacksService } from "../Services/SnacksServices.js";


function _drawSnacks() {
    let snacks = ProxyState.snacks
    let template = ''
    snacks.forEach(s => template += s.Template)
    console.log(template);

    document.getElementById('snacks').innerHTML = template
}


function _drawMoney() {

    document.getElementById('money').innerText = ProxyState.money

}





export class SnacksController {
    constructor() {


        _drawSnacks()
    }

    drawMoney() {
        // snacksService.transactionTotal()
        snacksService.drawMoney()
        // console.log('hello', ProxyState.money);
        _drawMoney()

    }
    purchaseItem() {

        snacksService.purchaseItem()
        console.log('hello', ProxyState.money, ProxyState.snacks[1])
        _drawMoney()
    }
}