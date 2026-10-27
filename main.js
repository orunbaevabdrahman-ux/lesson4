
// let count = 0;
// let number = document.querySelector("#number");
// let plus = document.querySelector("#plus");
// let minus = document.querySelector("#minus");
// number.textContent = count;

// plus.addEventListener("click", function () {
//     count = count + 1;
//     number.textContent = count;
//     number.style.color = "green";
// });

// minus.addEventListener("click", function () {
//     if(count > 0) {
//         count = count - 1;
//     }
//     number.textContent = count;
//     number.style.color = "red"
// });


// const box = document.querySelector("#box");
// box.addEventListener("mousemove", function(event) {
//     box.textContent = "x: " + event.offsetX + "y: " + event.offsetY;
// });


// const colorInput = document.querySelector("#colorInput");
// colorInput.addEventListener("input", function() {
//     document.body.style.backgroundColor = colorInput.value;
// });    


let age = 20;
let hasTicket = true;
if(age >= 18 && hasTicket === true) {
    console.log("ok");
} else {
    console.log("no");
}