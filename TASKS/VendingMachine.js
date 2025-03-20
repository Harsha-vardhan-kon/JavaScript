function VendingMachine(menu){
    switch(menu){
        case "coffee":
            console.log(`coffee price :$2.50`)
            break;
            case "tea":
            console.log(`tea price:$1.80`)
            break;
            case "juice":
            console.log(`juice price :$2.50`)
            break;
            case "water":
            console.log(`water price :$2.50`)
            break;
            default :
                console.log("item is not found in the menu")
            
    }
}
VendingMachine("mango")

function vending(menu) {
    let i = 0;
    while (i < menu.length) {
        console.log(menu[i]); 

        switch (menu[i]) {
            case "Coffee":
                console.log("The price of Coffee is $2.50");
                break;
            case "Tea":
                console.log("The price of Tea is $1.80");
                break;
            case "Juice":
                console.log("The price of Juice is $3.00");
                break;
            case "Water":
                console.log("The price of Water is $1.00");
                break;
            default:
                console.log("Invalid selection");
        }

        i++; 
    }
}


vending(["Water"]);







