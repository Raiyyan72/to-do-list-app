let input = document.querySelector("input");
let button = document.querySelector("#task");
let list = document.querySelector("#tasklist");


let strtbtn = document.querySelector(".hide , button");

let startpage = document.querySelector(".hide");
let mainapp = document.querySelector(".container");

let click  = document.querySelector("#myaudio");



button.addEventListener("click",function(){
    click.play();
    let tasktext = input.value;

    let li = document.createElement("li");
      li.innerText =tasktext;

    let dltbtn = document.createElement("button");
    dltbtn.innerText="Delete";


     li.appendChild(dltbtn);

    list.appendChild(li);

    input.value = "";
})

list.addEventListener("click", function (e) {
    click.play();
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }
});


strtbtn.addEventListener("click", function(){
    click.play();
    startpage.style.display = "none";
    mainapp.style.display = "flex";
     document.body.style.backgroundColor = "#CEB5A7";
})   



