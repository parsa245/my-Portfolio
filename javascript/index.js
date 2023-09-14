const button = document.getElementById("submitBtn");
const input1 = document.getElementById("Message")
const input2 = document.getElementById("exampleInputPassword1")
const input3 = document.getElementById("exampleInputEmail1")


button.addEventListener("click",clear)


function clear(){
    input1.innerHTML = "";
    input2.innerHTML = "";
    input3.innerHTML = "";
}