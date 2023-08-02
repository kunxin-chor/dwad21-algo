class HDB {
    // a class can have two kind of definitions
    // a class is a basically generic description of something
    // 1. we can define what variables the class will have
    address= "";
    floor = 1
    lease = 99;
    listingPrice=0;

    // the constructor function is special
    // its called wehn you create new object from the class
    constructor(address, floor, lease, listingPrice) {
        this.address = address;
        this.floor = floor;
        this.lease = lease;
        this.listingPrice = listingPrice;
    }

    // a function that is in a class is also known as a METHOD
    calculateDownpayment() {
        return this.listingPrice * 0.2;
    }
}
// a class is a blueprint for object(s)
// it defines what key/value pairs
// instances of the class should have
const hdb = new HDB("Yishun Ring Road", 13, 40, 300);
// hdb.listingPrice = 200;
// hdb.address = "Clementi Ave 10";
// hdb.lease = 30;
console.log("Default HDB = ", hdb);

const pinnacle = new HDB();
pinnacle.address = "Tanjong Pagar Ave 1";
pinnacle.listingPrice = 100;

console.log("Pinnacle =", pinnacle);
console.log("Downpayment for pinnacle =",
         pinnacle.calculateDownpayment())

console.log("Default HDB=", hdb);
console.log("Default HDB downpayment =", hdb.calculateDownpayment());