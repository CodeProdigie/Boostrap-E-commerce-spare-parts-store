document.addEventListener("DOMContentLoaded",function(){
    const grandtotal=document.querySelector(".gr-total");
    const totalfromlocal=JSON.parse(localStorage.getItem("totalArray"))
    const cartfeatures=document.querySelector(".cartfeatures");
    const cartfromlocal=JSON.parse(localStorage.getItem("productsArray")) || [];
    if(cartfromlocal){
        cartfromlocal.forEach(loadedcart=>{
            const newdiv=document.createElement("div");
            newdiv.classList.add("d-flex","productcart");
            newdiv.innerHTML=`
            <div class="detail-one">
                                         <img src="${loadedcart.image}" >
                                            <h4>${loadedcart.nameproduct}</h4>
                                        </div>
                                        <div class="ml-auto font-weight-bold actualprice">CFA ${loadedcart.productprice}</div>
            `
            cartfeatures.appendChild(newdiv);
        })
    }
    if(totalfromlocal){
        totalfromlocal.forEach(totalprice=>{
            const extradiv=document.createElement("div");
            extradiv.classList.add("d-flex","gr-holder");
            extradiv.innerHTML=`
            <h5>Total Price</h5>
            <div class="ml-auto h5"> ${totalprice.totalspan}</div>
            `
            grandtotal.appendChild(extradiv);
        })
    }

})


const placeorder=document.querySelector(".shopbtn")


placeorder.addEventListener("click",(e)=>{
  e.preventDefault()

  const allproducts=document.querySelectorAll(".productcart");
  const fname=document.querySelector(".fname").value;
    const lname=document.querySelector(".lname").value;
    const email=document.querySelector(".email").value;
    const phone=document.querySelector(".phone").value;
    const tprice=document.querySelector(".gr-holder .h5").textContent;
    const insertdata=JSON.parse(localStorage.getItem("locallydata")) || []
    const allproductslocally=JSON.parse(localStorage.getItem("locallyproducts")) || []
insertdata.push({
        fname,
        lname,
        email,
        phone,
        tprice
    })
    localStorage.setItem("locallydata",JSON.stringify(insertdata));
  allproducts.forEach(element=>{
   const f1name=document.querySelector(".fname").value;
   const l2name=document.querySelector(".lname").value;
   const prname=element.querySelector("h4").textContent;
   const image=element.querySelector("img").src;
   const prprice=element.querySelector(".actualprice").textContent;
     allproductslocally.push({
        prname,
        prprice,
        image,
        f1name,
        l2name
     })
     localStorage.setItem("locallyproducts",JSON.stringify(allproductslocally))
  })
  
  const newfname=document.querySelector(".fname")
    const newlname=document.querySelector(".lname")
    const newemail=document.querySelector(".email")
    const newphone=document.querySelector(".phone")
    newfname.value=""
    newlname.value=""
    newemail.value=""
    newphone.value=""
})