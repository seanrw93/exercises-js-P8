const btn = document.querySelector("#myButton");

btn.addEventListener("click", e => {
    e.target.innerHTML = "Hello, you clicked the button!";
});