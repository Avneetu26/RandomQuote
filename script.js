const btn = document.getElementById("btn");
const output = document.querySelector(".output");

let quotes = [
    "An Apple a day keeps the doctor away",
    "Never expect anything from anyone",
    "Your best friend is you and only you",
    "Don't trust anyone blindly"
]

btn.addEventListener("click", (e) => {
    let random = Math.floor(Math.random() * quotes.length);
    output.textContent = quotes[random];
})