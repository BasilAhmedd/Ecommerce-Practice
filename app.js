const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuitem");

const products = [

  {
    id : 1,
    price : 119 ,
    title : "Air Force",
    colors : [
      {
        code : "black",
        img :"./img/air.png"
      },
      {
        code : "darkblue",
        img :"./img/air2.png"
      }
    ]
  },
  {
    id : 2,
    price : 149 ,
    title : "Air Jordan",
    colors : [
      {
        code : "gray",
        img :"./img/jordan.png"
      },
      {
        code : "green",
        img :"./img/jordan2.png"
      }
    ]
  },
  {
    id : 3,
    price : 109 ,
    title : "Blazer",
    colors : [
      {
        code : "lightGray",
        img :"./img/blazer.png"
      },
      {
        code : "green",
        img :"./img/blazer2.png"
      }
    ]
  },
  {
    id : 4,
    price : 129 ,
    title : "Crater",
    colors : [
      {
        code : "black",
        img :"./img/crater.png"
      },
      {
        code : "lightGray",
        img :"./img/crater2.png"
      }
    ]
  },
  {
    id : 5,
    price : 99 ,
    title : "Hippie",
    colors : [
      {
        code : "grey",
        img :"./img/hippie.png"
      },
      {
        code : "black",
        img :"./img/hippie2.png"
      }
    ]
  },
];

let chosenProducts = products[0]

const currentChosenImg = document.querySelector(".productImg");
const currentChosenTitle = document.querySelector(".productTitle");
const currentChosenPrice = document.querySelector(".productPrice");
const currentChosenColor = document.querySelectorAll(".color");
const currentChosenSize = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // slider 
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
   
    //change chosen product
   chosenProducts = products[index]
   //change title
   currentChosenTitle.textContent = chosenProducts.title

   // change price

   currentChosenPrice.textContent = "$" + chosenProducts.price
   
   //change img
   currentChosenImg.src = chosenProducts.colors[0].img
    
   //multiple colors
   currentChosenColor.forEach((color , index)=>{
    color.style.backgroundColor = chosenProducts.colors[index].code
   }) 


  });
});

currentChosenColor.forEach((color , index) =>{
  color.addEventListener("click" , ()=>{
    currentChosenImg.src = chosenProducts.colors[index].img
  } )
})

currentChosenSize.forEach((size,index)=>{
  size.addEventListener("click" , ()=>{
    currentChosenSize.forEach(size=>{
      size.style.backgroundColor = "white"
      size.style.color = "black"
    } )
    size.style.backgroundColor = "black"
    size.style.color = "white"
  } )
})

const productPaymentBTN = document.querySelector(".productButton")
const close = document.querySelector(".close")
const payment = document.querySelector(".payment")

productPaymentBTN.addEventListener("click" , ()=>{
  payment.style.display = "flex"
})
close.addEventListener("click" , ()=>{
  payment.style.display = "none"
})
