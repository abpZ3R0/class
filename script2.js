// const button = document.getElementById("submitButton");

// button.addEventListener("click", function(){
//     const inputElement = document.getElementById("input1");
//     const val = inputElement.value;

//     // Create ul
//     const lists = document.getElementById("lists");
//     // create li
//     const item = document.createElement("li");
//     // adding value in li
//     item.innerText = val;
//     item.classList.add("list-group-item");
//     item.classList.add("mt-1");
//     // Adding this li to ul
//     lists.appendChild(item);
//     inputElement.value="";
// });


const inputElement = document.getElementById("input1");
inputElement.addEventListener("keyup", function(e){
    this.innerText = "dip";
    e.keyCode = 35;
    console.log(e.keyCode)
    const text = document.getElementById("text");
    text.innerText = e.target.value;
});
