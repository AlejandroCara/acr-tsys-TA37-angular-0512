let buttons = document.getElementsByClassName("btn");
let nums = 0;
let btn_click = (e) => {
    if(e.target.innerHTML == "Raiz"){
        Math.sqrt(document.getElementById("screen").innerHTML);
        nums = 0;
    } else if(e.target.innerHTML == "1/x"){
        document.getElementById("screen").innerHTML = 1 / document.getElementById("screen").innerHTML;
        nums = 0;
    } else if ((e.target.innerHTML == "+" || e.target.innerHTML == "-" || e.target.innerHTML == "/" || e.target.innerHTML == "%" || e.target.innerHTML == "=" || e.target.innerHTML == "*") && nums == 2) {
        calculate();
        nums = 1;
    } else if ((e.target.innerHTML == "+" || e.target.innerHTML == "-" || e.target.innerHTML == "/" || e.target.innerHTML == "%" || e.target.innerHTML == "=" || e.target.innerHTML == "*")) {
        document.getElementById("screen").innerHTML += e.target.innerHTML;
    } else if(e.target.innerHTML == "." || e.target.innerHTML == ","){
        document.getElementById("screen").innerHTML += e.target.innerHTML;
        nums--;
    } else if((e.target.innerHTML != "+" && e.target.innerHTML != "-" && e.target.innerHTML != "/" && e.target.innerHTML != "%" && e.target.innerHTML != "=" || e.target.innerHTML == "*")){
        document.getElementById("screen").innerHTML += e.target.innerHTML;
        if(nums < 2) {
            nums++;
        }
    }
    console.log(nums)
}

let clear = () => {
    document.getElementById("screen").innerHTML = "";
    nums = 0;
}

let calculate = () => {
    document.getElementById("screen").innerHTML = Function("return " + document.getElementById("screen").innerHTML)();
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", btn_click)
}

document.getElementById("ce").addEventListener("click", clear);



