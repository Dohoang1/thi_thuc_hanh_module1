class Mobile {
    constructor(ID, name, brand, price) {
        this.ID = ID;
        this.name = name;
        this.brand = brand;
        this.price = price;
    }

    getID() {
        return this.ID;
    }
    getname() {
        return this.name;
    }
    getbrand() {
        return this.brand;
    }
    getprice() {
        return this.price;
    }

    setID(newID) {
        this.ID = newID
}
    setname(newname) {
        this.name = newname;
    }
    setbrand(newbrand) {
        this.brand = newbrand;
    }
    setprice(newprice) {
        this.price = newprice;
    }
}