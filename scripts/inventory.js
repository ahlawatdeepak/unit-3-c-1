let database=JSON.parse(localStorage.getItem("products"))

database.forEach(function(el,index){

    let box=document.createElement("div")
    box.setAttribute("class","self")

    let imgbox=document.createElement("div")
    imgbox.setAttribute("class","img")
    let pimg=document.createElement("img")
    pimg.setAttribute("class","img")
    pimg.setAttribute("src",el.image)
    imgbox.append(pimg)

    
    let ptype=document.createElement("div")
    ptype.setAttribute("class","type")
    ptype.textContent=el.type;

    let desc=document.createElement("div")
    desc.setAttribute("class","desc")
    desc.textContent=el.desc;

    let price=document.createElement("div")
    price.setAttribute("class","price")
    price.textContent=el.price;

    let pdelete=document.createElement("div")
    pdelete.setAttribute("id","remove_product")
    pdelete.textContent="Remove"
    pdelete.addEventListener("click",function(){
        deleteData(el,index)
    });

    
  box.append(pimg,ptype,desc,price,pdelete)
  
 document.querySelector("#all_products").append(box)

})

function deleteData(el,index){
    database.splice(index,1)
    localStorage.setItem("products",JSON.stringify(database))
    window.location.reload()
}