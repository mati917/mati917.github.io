let tabHeader = document.getElementById("progress__tabs-header");
let tabIndicator = document.getElementById("progress__tab-indicator");
let tabBody = document.getElementById("progress__tabs-body");
let tabPane = tabHeader.getElementsByClassName("tab-header");

for(let i = 0; i < tabPane.length; i++){
    tabPane[i].addEventListener("click", function(){
        tabHeader.getElementsByClassName("active")[0].classList.remove("active");
        tabPane[i].classList.add("active");

        tabBody.getElementsByClassName("active")[0].classList.remove("active");
        tabBody.getElementsByClassName('tab-body')[i].classList.add("active");

        tabIndicator.style.left = `calc(calc(100% / 2) * ${i})`;

    });
}