const hdb = {
    "address":"Yishun Ring Road",
    "listingPrice": 1200000,
    "floor": 11,
    "lease": 40
}
const hdb2 = {
    "address":"AMK Ave 1",
    "listingPrice": 1350000,
    "floor":8,
    "lease":50
}
const hdb3=  {
    "Address":"AMK Ave 3",
    "listing_Price": 3000000,
    "floor": 3,
    "lease": 33
}

const listings = [hdb, hdb2, hdb3];
for (let listing of listings) {
    console.log(listing.address);
}

