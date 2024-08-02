let mobile1 = new Mobile("mb03082024","XiaoMi X9i", "XiaoMi", 15000000)
let mobile2 = new Mobile("mb02082024","Samsung s20","Samsung",20000000)
let mobile3 = new Mobile("mb01082024","IPhone 15","iPhone",30000000);
let mobile4 = new Mobile("mb30072024","","","")

mobile4.setname("test");
mobile4.setbrand("?!");
mobile4.setprice(99999999);

let products = [];
products.push(mobile1,mobile2,mobile3,mobile4);


function sortProduct(products){
let temp;
for (let i = 0; i < products.length; i++) {
    for (let j = i + 1; j < products.length; j++) {
        if (products[i].price > products[j].price) {
            temp = products[i];
            products[i] = products[j];
            products[j] = temp;
        }
    }
}
}

function showListP() {
    let content = "";
    for ( let i = 0; i < products.length; i++ ) {
        content += `<tr style="text-align: center">`
        content += `<td>${products[i].ID}</td>`
        content += `<td>${products[i].name} </td>`
        content += `<td>${products[i].brand} </td>`
        content += `<td>${products[i].price} </td>`
        content += `<tr>`
    }
    document.getElementById("result").innerHTML = content;
}

sortProduct(products)
showListP();