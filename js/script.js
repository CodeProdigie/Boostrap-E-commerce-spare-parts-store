const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("visibleshow")
        }else{
            entry.target.classList.remove("visibleshow")
        }
    })
  })

  const hiddenelements=document.querySelectorAll(".hidden1")
  hiddenelements.forEach((el) => observer.observe(el))


  const observer1=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("visibleshow1")
        }else{
            entry.target.classList.remove("visibleshow1")
        }
    })
  })

  const hiddenelements1=document.querySelectorAll(".hidden2")
  hiddenelements1.forEach((el) => observer1.observe(el))
  
  const observer2=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("visibleshow2")
        }else{
            entry.target.classList.remove("visibleshow2")
        }
    })
  })

  const hiddenelements2=document.querySelectorAll(".hidden3")
  hiddenelements2.forEach((el) => observer2.observe(el))

  const observer3=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("visibleshow3")
        }else{
            entry.target.classList.remove("visibleshow3")
        }
    })
  })

  const hiddenelements3=document.querySelectorAll(".hidden4")
  hiddenelements3.forEach((el) => observer3.observe(el))


const addcart=document.querySelectorAll(".addtocart")

addcart.forEach(button=>{
    button.addEventListener("click",(e)=>{

         e.preventDefault()

        var qty=document.querySelector(".badgenum");
        var incrementqty=parseInt(qty.innerHTML)
        newqty=incrementqty+1;
        qty.innerHTML=newqty;
       addproductstocart(e)




  
       
        
    })
})

function addproductstocart(e){
    const cartitems=document.querySelector(".cart-list li:last-child")

    const product=e.target.closest(".box-item")

    const image=product.querySelector("img").src
    const productname=product.querySelector(".why-text h4").innerHTML
    const productprice=product.querySelector(".why-text h5 span").innerHTML

    const li=document.createElement("li")
    li.innerHTML=`
    <a href="#" class="photo"><img src="${image}" class="cart-thumb" alt="" /></a>
                                <h6><a href="#">${productname} </a></h6>
                                <p>CFA <span class="price"> ${productprice}</span></p>
    `
    cartitems.parentNode.insertBefore(li,cartitems);

    loadtotal()
   
}

function loadtotal(){
    const allprices=document.querySelectorAll(".price")
    let total=0;
    allprices.forEach(amount=>{
        total+=parseFloat(amount.innerHTML);
    })
    const totalamount=document.querySelector(".totalamt")
    totalamount.innerHTML=`<strong>Total</strong>:`+`CFA `+total
}



const productsinto=document.getElementById("cartbtn");
const totalarray=[]
productsinto.addEventListener("click",function(){
    const productlist=document.querySelectorAll(".cart-list li:not(.total)");
    
    const productsArray=Array.from(productlist).map(product =>({
        image:product.querySelector("img").src,
        nameproduct:product.querySelector("h6").textContent,
        productprice:product.querySelector("p span").textContent,

    }))

    localStorage.setItem("productsArray",JSON.stringify(productsArray))

    const pricespan=document.querySelector(".totalamt");
    const totaltext=pricespan.innerText;
    const totalspan=totaltext.replace('Total:','').trim();
    totalarray.push({totalspan});

    localStorage.setItem("totalArray",JSON.stringify(totalarray))
})



document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
   }
   document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
   }

   const search=()=>{
    const searchbox=document.getElementById("search-box").value.toUpperCase();
    const storeitems=document.querySelector(".special-list")
    const productitems=document.querySelectorAll(".box-item")
    const pname=storeitems.getElementsByTagName("h4")
  
    for(var i=0;i<pname.length;i++){
   let match=productitems[i].getElementsByTagName('h4')[0];
   if(match){
    let textvalue=match.textContent || match.innerHTML
    if(textvalue.toUpperCase().indexOf(searchbox)> -1){
        productitems[i].style.display=""
    }else{
        productitems[i].style.display="none"
    }
   }
    }
  
  }