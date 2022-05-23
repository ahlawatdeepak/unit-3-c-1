//store the products array in localstorage as "products"
 

// >>>>>>>>Getting input Data<<<<<<<<<<<<<<
let getData=document.getElementById("products")
getData.addEventListener("submit",storeData)



function storeObj(type, desc, price, image){
    this.type=type;
    this.desc=desc;
    this.price=price;
    this.image=image;

}

// <<<<<<<<<<<<store Data>>>>>>>>>>>>

let dataforlocalstorage=JSON.parse(localStorage.getItem("products"))||[]
function storeData(){
    event.preventDefault();

    let type=getData.type.value
    let desc=getData.desc.value
    let price=getData.price.value
    let image=getData.image.value



    let userData= new storeObj(type,desc,price,image)
     
    dataforlocalstorage.push(userData)

    localStorage.setItem("products",JSON.stringify(dataforlocalstorage))

    window.location.reload();
}