class product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }

    logProducts(){
        console.log(`${this.name} costs ${this.price} kr.`)
    }
}

const chair=new product(chair,200);
chair.logProducts();