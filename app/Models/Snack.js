export class Snack {
    constructor(name, price, img) {
        this.name = name
        this.price = price
        this.img = img

    }


    get Template() {
        return `

    <div class="col-4 m-3 p-2 bg-dark text-dark rounded shadow">
        <img class="img-fluid my-4" src="${this.img}" alt="">
        <h4 class="bg-success m-4" onclick="app.snacksController.purchaseItem()">${this.name} <span>${this.price}</span></h4>
      </div>
`

    }


}