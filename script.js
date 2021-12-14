// const button = document.getElementById("add-to-cart");
// button.addEventListener("click", function(){
//     const price = abc("price1");
//     const total = abc("total");
//     const tax = abc("tax");

//     const newTotal = price + total;
//     display("total",newTotal );
//     const subtotal = newTotal + tax;
//     display("subtotal",subtotal );
// })

// function abc(id){
//     const getPrice = document.getElementById(id).innerText;
//     const price = parseInt(getPrice);
//     return price
// }

// function display(id, sum){
//     document.getElementById(id).innerText = sum;
// }

// By class Name

// const button = document.getElementsByClassName("add-to-cart");

// Array.from(button).forEach(
//     function(element, index, array) {
//         element.addEventListener("click", function(){
//             const getPrice = this.parentElement.querySelector('.price').innerText;
//             const price = parseInt(getPrice);

//             const getTotal = document.getElementById("total").innerText;
//             const total = parseInt(getTotal);
//             const newTotal = price + total;
//             document.getElementById("total").innerText = newTotal;

//             const getTax = document.getElementById("tax").innerText;
//             const tax = parseInt(getTax);

//             const subtotal = newTotal + tax;
//             document.getElementById("subtotal").innerText = subtotal;
//         })
//     }
// );


// const button = document.querySelectorAll(".add-to-cart");
// console.log(button)



const container = document.getElementById("hide");
container.style.display = "none";

const submitBtn = document.getElementById("submitButton");
submitBtn.addEventListener("click", function(){
    container.style.display = "block";
    const text1 = document.getElementById("text1");
    text1.style.display = "none";

    // const getInputText = document.getElementById("inputText");
    // const inputText = getInputText.value;
    // const price= document.getElementById("price1")
    // price.innerText = inputText
    // console.log(inputText)


})